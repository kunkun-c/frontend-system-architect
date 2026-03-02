import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import chalk from 'chalk';
import ora from 'ora';
import prompts from 'prompts';
import type { AIType } from '../types/index.js';
import { AI_TYPES, PLATFORM_CONFIG } from '../types/index.js';
import { generatePlatformFiles, generateAllPlatformFiles } from '../utils/template.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = join(__dirname, '..', 'assets');

interface InitOptions {
  ai?: AIType;
  force?: boolean;
  offline?: boolean;
}

export async function initCommand(options: InitOptions): Promise<void> {
  console.log(chalk.bold.cyan('\nFrontend System Architect Installer\n'));

  let aiType = options.ai;

  // Auto-detect or prompt for AI type
  if (!aiType) {
    const response = await prompts({
      type: 'select',
      name: 'aiType',
      message: 'Select AI assistant to install for:',
      choices: AI_TYPES.map(type => ({
        title: PLATFORM_CONFIG[type]?.name || type,
        value: type,
      })),
      initial: 0,
    });

    if (!response.aiType) {
      console.log(chalk.yellow('Installation cancelled'));
      return;
    }

    aiType = response.aiType as AIType;
  }

  console.log(`Installing for: ${chalk.cyan(PLATFORM_CONFIG[aiType]?.name || aiType)}\n`);

  const spinner = ora('Installing files...').start();
  const cwd = process.cwd();
  let copiedFolders: string[] = [];

  try {
    // Use template-based generation
    if (aiType === 'all') {
      copiedFolders = await generateAllPlatformFiles(cwd);
    } else {
      copiedFolders = await generatePlatformFiles(cwd, aiType);
    }

    spinner.succeed('Generated from templates!');

    // Summary
    console.log();
    console.log(chalk.bold('Installed folders:'));
    copiedFolders.forEach(folder => {
      console.log(`  ${chalk.green('+')} ${folder}`);
    });

    console.log();
    console.log(chalk.green('✓ Frontend System Architect installed successfully!'));

    // Next steps
    console.log();
    console.log(chalk.bold('Next steps:'));
    console.log(chalk.dim('  1. Restart your AI coding assistant'));
    console.log(chalk.dim('  2. Try: "Analyze my frontend architecture"'));
    console.log();
  } catch (error) {
    spinner.fail('Installation failed');
    if (error instanceof Error) {
      console.log(chalk.red(error.message));
    }
    process.exit(1);
  }
}
