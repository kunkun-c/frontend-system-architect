export type AIType = 
  | 'claude'
  | 'cursor'
  | 'windsurf'
  | 'antigravity'
  | 'copilot'
  | 'kiro'
  | 'codex'
  | 'qoder'
  | 'roocode'
  | 'gemini'
  | 'trae'
  | 'opencode'
  | 'continue'
  | 'codebuddy'
  | 'droid'
  | 'all';

export const AI_TYPES: AIType[] = [
  'claude',
  'cursor',
  'windsurf',
  'antigravity',
  'copilot',
  'kiro',
  'codex',
  'qoder',
  'roocode',
  'gemini',
  'trae',
  'opencode',
  'continue',
  'codebuddy',
  'droid',
  'all',
];

export interface InitOptions {
  ai?: AIType;
  force?: boolean;
  offline?: boolean;
  path?: string;
}

export interface UpdateOptions {
  ai?: AIType;
  path?: string;
}

export const PLATFORM_CONFIG: Record<string, { name: string; folder: string }> = {
  claude: { name: 'Claude Code', folder: '.claude/skills/frontend-system-architect' },
  cursor: { name: 'Cursor', folder: '.cursor/skills/frontend-system-architect' },
  windsurf: { name: 'Windsurf', folder: '.windsurf/skills/frontend-system-architect' },
  antigravity: { name: 'Antigravity', folder: '.antigravity/skills/frontend-system-architect' },
  copilot: { name: 'GitHub Copilot', folder: '.github/copilot/skills/frontend-system-architect' },
  kiro: { name: 'Kiro', folder: '.kiro/skills/frontend-system-architect' },
  codex: { name: 'Codex CLI', folder: '.codex/skills/frontend-system-architect' },
  qoder: { name: 'Qoder', folder: '.qoder/skills/frontend-system-architect' },
  roocode: { name: 'Roo Code', folder: '.roo/skills/frontend-system-architect' },
  gemini: { name: 'Gemini CLI', folder: '.gemini/skills/frontend-system-architect' },
  trae: { name: 'Trae', folder: '.trae/skills/frontend-system-architect' },
  opencode: { name: 'OpenCode', folder: '.opencode/skills/frontend-system-architect' },
  continue: { name: 'Continue', folder: '.continue/skills/frontend-system-architect' },
  codebuddy: { name: 'CodeBuddy', folder: '.codebuddy/skills/frontend-system-architect' },
  droid: { name: 'Droid (Factory)', folder: '.factory/skills/frontend-system-architect' },
};
