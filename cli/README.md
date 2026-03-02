# Frontend System Architect CLI

CLI tool to install the Frontend System Architect skill for AI coding assistants.

## Development

```bash
# Install dependencies
bun install

# Build
bun run build

# Test locally
node dist/index.js init --ai claude --offline

# Publish
npm publish
```

## Commands

### `fea init`

Install the skill for your AI assistant.

```bash
fea init --ai claude      # Claude Code
fea init --ai cursor      # Cursor
fea init --ai windsurf    # Windsurf
fea init --ai all         # All assistants
fea init --offline        # Use bundled assets
```

### `fea search`

Search the architecture database.

```bash
fea search "e-commerce"
fea search "LCP" --domain performance
fea search "dashboard" --stack nextjs
```

### `fea update`

Update to the latest version.

```bash
fea update
```

### `fea versions`

List available versions.

```bash
fea versions
```

## Supported Platforms

- Claude Code
- Cursor
- Windsurf
- Antigravity
- GitHub Copilot
- Kiro
- Codex CLI
- Qoder
- Roo Code
- Gemini CLI
- Trae
- OpenCode
- Continue
- CodeBuddy
- Droid (Factory)
