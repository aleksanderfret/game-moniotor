import child_process from 'child_process';
import { existsSync, readdirSync, statSync } from 'fs';
import os from 'os';
import path from 'path';

const { argv, cwd, env } = process;

const dirsToSkip = ['build', 'dist', 'node_modules'];
const cliArguments = argv.slice(2);
const npmCommand = cliArguments[0];
const root = cwd();

const validateDir = (dir: string): boolean =>
  !dirsToSkip.includes(dir) && dir[0] !== '.';

const topSeparator =
  '==========================================================================';
const bottomSeparator =
  '##########################################################################';

const printHeader = (message: string): void => {
  console.info(topSeparator);
  console.info(message);
  console.info(topSeparator);
};

const printFooter = (): void => {
  console.info(bottomSeparator);
  console.info(os.EOL);
};

const getDirs = (dir: string): string[] =>
  readdirSync(dir)
    .filter(subDir => {
      const dirPath = path.join(dir, subDir);

      return statSync(dirPath).isDirectory() && validateDir(subDir);
    })
    .map(subDir => path.join(dir, subDir));

const npmRun = (dir: string, command: string): void => {
  printHeader(
    `Performing "npm ${command}" inside ${
      dir === root
        ? 'root directory'
        : '.' + path.sep + path.relative(root, dir)
    }`
  );

  try {
    const npmCmd = os.platform().startsWith('win') ? 'npm.cmd' : 'npm';

    child_process.spawnSync(npmCmd, [command], {
      env: env,
      cwd: dir,
      stdio: 'inherit'
    });
  } catch (error) {
    // do nothing
  }

  printFooter();
};

const npmRunInDirs = (dir: string): void => {
  const hasPackageJson = existsSync(path.join(dir, 'package-lock.json'));
  if (hasPackageJson) {
    npmRun(dir, npmCommand);
  }

  getDirs(dir).forEach(npmRunInDirs);
};

npmRunInDirs(root);
