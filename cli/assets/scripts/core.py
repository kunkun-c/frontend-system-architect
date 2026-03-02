#!/usr/bin/env python3
"""
Frontend System Architect - Core Search Engine
BM25 + regex hybrid search for architecture decisions database.
"""

import csv
import re
from pathlib import Path
from typing import Dict, List, Optional
from collections import defaultdict
import math


# Data directory
DATA_DIR = Path(__file__).parent.parent / "data"

# Domain to file mapping
DOMAIN_FILES = {
    "rendering": "rendering-decisions.csv",
    "page": "page-classification.csv",
    "performance": "performance-metrics.csv",
    "state": "state-patterns.csv",
    "caching": "caching-strategies.csv",
    "tech": "tech-stack.csv",
    "monitoring": "monitoring-patterns.csv",
    "antipattern": "anti-patterns.csv",
}

# Stack to file mapping
STACK_FILES = {
    "nextjs": "stacks/nextjs.csv",
    "react": "stacks/react.csv",
    "vue": "stacks/vue.csv",
    "sveltekit": "stacks/sveltekit.csv",
    "astro": "stacks/astro.csv",
    "angular": "stacks/angular.csv",
}


def load_csv(file_path: Path) -> List[Dict[str, str]]:
    """Load CSV file and return list of dictionaries."""
    if not file_path.exists():
        return []
    
    with open(file_path, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        return list(reader)


def tokenize(text: str) -> List[str]:
    """Tokenize text for search."""
    if not text:
        return []
    # Convert to lowercase and split on non-alphanumeric
    text = text.lower()
    tokens = re.findall(r'\b\w+\b', text)
    return tokens


class BM25:
    """BM25 ranking implementation."""
    
    def __init__(self, k1: float = 1.5, b: float = 0.75):
        self.k1 = k1
        self.b = b
        self.doc_lengths = []
        self.avg_doc_length = 0
        self.doc_count = 0
        self.term_freqs = defaultdict(lambda: defaultdict(int))
        self.doc_freqs = defaultdict(int)
        self.idf = {}
    
    def index(self, documents: List[str]):
        """Index documents for BM25 search."""
        self.doc_count = len(documents)
        self.doc_lengths = [len(tokenize(doc)) for doc in documents]
        self.avg_doc_length = sum(self.doc_lengths) / self.doc_count if self.doc_count > 0 else 0
        
        for doc_id, doc in enumerate(documents):
            tokens = tokenize(doc)
            term_counts = defaultdict(int)
            
            for token in tokens:
                term_counts[token] += 1
            
            for term, count in term_counts.items():
                self.term_freqs[term][doc_id] = count
            
            for term in term_counts:
                self.doc_freqs[term] += 1
        
        # Calculate IDF
        for term in self.doc_freqs:
            self.idf[term] = math.log(
                (self.doc_count - self.doc_freqs[term] + 0.5) / 
                (self.doc_freqs[term] + 0.5) + 1
            )
    
    def score(self, query: str, doc_id: int) -> float:
        """Calculate BM25 score for a document."""
        query_tokens = tokenize(query)
        score = 0
        
        doc_length = self.doc_lengths[doc_id] if doc_id < len(self.doc_lengths) else 0
        
        for term in query_tokens:
            if term not in self.term_freqs:
                continue
            
            tf = self.term_freqs[term].get(doc_id, 0)
            if tf == 0:
                continue
            
            idf = self.idf.get(term, 0)
            
            # BM25 formula
            numerator = tf * (self.k1 + 1)
            denominator = tf + self.k1 * (1 - self.b + self.b * doc_length / self.avg_doc_length)
            score += idf * numerator / denominator
        
        return score


def search_database(
    query: str,
    domain: Optional[str] = None,
    stack: Optional[str] = None,
    limit: int = 10
) -> List[Dict[str, str]]:
    """
    Search the architecture database.
    
    Args:
        query: Search query string
        domain: Optional domain filter (rendering, performance, state, caching, tech, monitoring)
        stack: Optional stack filter (nextjs, react, vue, sveltekit, astro, angular)
        limit: Maximum number of results
    
    Returns:
        List of matching records with scores
    """
    results = []
    
    # Determine which files to search
    files_to_search = []
    
    if stack:
        if stack in STACK_FILES:
            file_path = DATA_DIR / STACK_FILES[stack]
            files_to_search.append(("stack", file_path))
    elif domain:
        if domain in DOMAIN_FILES:
            file_path = DATA_DIR / DOMAIN_FILES[domain]
            files_to_search.append((domain, file_path))
    else:
        # Search all domains and stacks
        for d, filename in DOMAIN_FILES.items():
            files_to_search.append((d, DATA_DIR / filename))
        for s, filename in STACK_FILES.items():
            files_to_search.append((s, DATA_DIR / filename))
    
    # Search each file
    for domain_name, file_path in files_to_search:
        records = load_csv(file_path)
        
        if not records:
            continue
        
        # Create searchable text for each record
        searchable_texts = []
        for record in records:
            # Combine all fields into searchable text
            text = " ".join(str(v) for v in record.values() if v)
            searchable_texts.append(text)
        
        # Index with BM25
        bm25 = BM25()
        bm25.index(searchable_texts)
        
        # Score each record
        for doc_id, record in enumerate(records):
            score = bm25.score(query, doc_id)
            
            # Boost score for exact matches
            query_lower = query.lower()
            for value in record.values():
                if value and query_lower in str(value).lower():
                    score += 5.0  # Boost for exact match
            
            if score > 0:
                result = dict(record)
                result["_score"] = score
                result["_domain"] = domain_name
                results.append(result)
    
    # Sort by score and limit
    results.sort(key=lambda x: x.get("_score", 0), reverse=True)
    return results[:limit]


def get_all_domains() -> List[str]:
    """Get list of all available domains."""
    return list(DOMAIN_FILES.keys())


def get_all_stacks() -> List[str]:
    """Get list of all available stacks."""
    return list(STACK_FILES.keys())


def get_page_recommendation(page_type: str) -> Optional[Dict[str, str]]:
    """
    Get rendering recommendation for a specific page type.
    
    Args:
        page_type: Type of page (e.g., "Landing Page", "Dashboard")
    
    Returns:
        Recommendation record or None
    """
    file_path = DATA_DIR / DOMAIN_FILES["page"]
    records = load_csv(file_path)
    
    page_type_lower = page_type.lower()
    
    for record in records:
        if record.get("page_type", "").lower() == page_type_lower:
            return record
    
    return None


def get_rendering_decision(
    data_nature: str,
    seo_requirement: str,
    server_budget: str
) -> List[Dict[str, str]]:
    """
    Get rendering decision based on criteria.
    
    Args:
        data_nature: static, periodic, realtime, per_user
        seo_requirement: high, medium, low
        server_budget: low, medium, high
    
    Returns:
        List of matching recommendations
    """
    file_path = DATA_DIR / DOMAIN_FILES["rendering"]
    records = load_csv(file_path)
    
    results = []
    
    for record in records:
        match = True
        
        if data_nature and record.get("data_nature", "").lower() != data_nature.lower():
            match = False
        if seo_requirement and record.get("seo_requirement", "").lower() != seo_requirement.lower():
            match = False
        if server_budget and record.get("server_budget", "").lower() != server_budget.lower():
            match = False
        
        if match:
            results.append(record)
    
    return results


if __name__ == "__main__":
    # Test search
    results = search_database("e-commerce", limit=5)
    for r in results:
        print(f"ID: {r.get('id')}, Score: {r.get('_score'):.2f}")
        print(f"  Domain: {r.get('_domain')}")
        print(f"  Recommendation: {r.get('recommended_architecture') or r.get('rendering_pattern')}")
        print()
