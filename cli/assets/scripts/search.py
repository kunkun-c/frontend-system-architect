#!/usr/bin/env python3
"""
Frontend System Architect - Search CLI
Searchable database for architecture decisions, performance patterns, and tech stack recommendations.
"""

import argparse
import sys
import os
from pathlib import Path

# Add scripts directory to path
sys.path.insert(0, str(Path(__file__).parent))

from core import search_database, get_all_domains, get_all_stacks


def main():
    parser = argparse.ArgumentParser(
        description="Search Frontend System Architect database",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Search for rendering recommendations
  python search.py "e-commerce" --domain rendering
  
  # Search for performance patterns
  python search.py "LCP optimization" --domain performance
  
  # Search for state management
  python search.py "global state" --domain state
  
  # Search for Next.js specific patterns
  python search.py "dashboard" --stack nextjs
  
  # List all available domains
  python search.py --list-domains
  
  # List all available stacks
  python search.py --list-stacks
        """
    )
    
    parser.add_argument("query", nargs="?", help="Search query")
    parser.add_argument("--domain", "-d", help="Search in specific domain")
    parser.add_argument("--stack", "-s", help="Search for specific tech stack")
    parser.add_argument("--limit", "-n", type=int, default=10, help="Maximum results (default: 10)")
    parser.add_argument("--list-domains", action="store_true", help="List available domains")
    parser.add_argument("--list-stacks", action="store_true", help="List available stacks")
    parser.add_argument("--verbose", "-v", action="store_true", help="Verbose output")
    
    args = parser.parse_args()
    
    # List domains
    if args.list_domains:
        print("Available Domains:")
        for domain in get_all_domains():
            print(f"  - {domain}")
        return
    
    # List stacks
    if args.list_stacks:
        print("Available Stacks:")
        for stack in get_all_stacks():
            print(f"  - {stack}")
        return
    
    # Require query for search
    if not args.query:
        parser.print_help()
        return
    
    # Perform search
    results = search_database(
        query=args.query,
        domain=args.domain,
        stack=args.stack,
        limit=args.limit
    )
    
    if not results:
        print("No results found.")
        return
    
    print(f"\nFound {len(results)} result(s):\n")
    
    for i, result in enumerate(results, 1):
        print(f"--- Result {i} ---")
        print(f"ID: {result.get('id', 'N/A')}")
        print(f"Domain: {result.get('_domain', 'N/A')}")
        
        # Print all fields except internal ones
        for key, value in result.items():
            if key.startswith('_'):
                continue
            if args.verbose or key in ['id', 'recommended_architecture', 'reason', 'use_case', 'page_type', 'rendering_pattern']:
                print(f"{key}: {value}")
        
        print()


if __name__ == "__main__":
    main()
