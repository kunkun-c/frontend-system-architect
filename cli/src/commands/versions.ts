import chalk from 'chalk';

export async function versionsCommand(): Promise<void> {
  console.log(chalk.cyan.bold('\nAvailable Versions:\n'));
  
  const versions = [
    { version: '1.0.0', date: '2024-01-15', description: 'Initial release' },
    { version: 'latest', date: 'Current', description: 'Latest from main branch' },
  ];

  for (const v of versions) {
    console.log(chalk.green(`  v${v.version}`) + chalk.gray(` (${v.date})`));
    console.log(chalk.gray(`    ${v.description}`));
  }

  console.log(chalk.gray('\nUse "fea update" to get the latest version.'));
}
