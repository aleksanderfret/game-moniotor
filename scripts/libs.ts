import {
  existsSync,
  readdirSync,
  readFileSync,
  statSync,
  unlinkSync,
  writeFileSync
} from 'fs';
import os from 'os';
import path from 'path';

type Library = {
  [T: string]: string;
};

type Libraries = {
  [T: string]: Library;
};

const { cwd } = process;

const cliArguments = process.argv.slice(2);
const [licenseFile, outputFile, json] = cliArguments;
const endOfLineMarker = os.EOL;
const doubleEndOfLineMarker = `${os.EOL}${os.EOL}`;
const paths: string[] = [];
const targetName =
  outputFile.indexOf('.') < 0 ? outputFile : [outputFile.split('.')];
const targetFile = `${cwd()}/${targetName}`;
const root = cwd();
const dirsToSkip = ['build', 'dist', 'node_modules'];
const saveAsJson = json && json === 'json';

const disableLink = (text: string) => text.replace(/\./g, '<i></i>.');

const mdHeader = (level: number) => `${'#'.repeat(level)} `;

const mapObject = (object, callback) =>
  Object.entries(object).reduce(
    (newObject, [key, value]) => ({
      ...newObject,
      [key]: callback(value, key)
    }),
    {}
  );

const prepareEntry = (data: any): string => {
  const { licenses, name, repository } = data;
  let content = '';

  content += `* **${disableLink(name)}**${endOfLineMarker}`;
  content += `  - license: ${licenses}${endOfLineMarker}`;
  content += `  - repository: ${repository}${endOfLineMarker}`;

  return content;
};

const prepareLibraries = (libraries: Libraries): string => {
  const names = Object.keys(libraries);
  names.sort();

  return names.reduce((text, name) => {
    const data = { name, ...libraries[name] };

    return `${text}${prepareEntry(data)}`;
  }, '');
};

const prepareContent = (libraries: Libraries): string => {
  let content = `${mdHeader(1)}Third-party libraries${doubleEndOfLineMarker}`;

  content += prepareLibraries(libraries);

  return content;
};

const getLibraries = (libPathJson: string): Libraries =>
  mapObject(
    JSON.parse(readFileSync(libPathJson, 'utf8')),
    ({ licenses, repository }, key) => ({
      licenses,
      name: key,
      repository
    })
  );

const validateDir = (dir: string): boolean =>
  !dirsToSkip.includes(dir) && dir[0] !== '.';

const getDirs = (dir: string): string[] =>
  readdirSync(dir)
    .filter(subDir => {
      const dirPath = path.join(dir, subDir);

      return statSync(dirPath).isDirectory() && validateDir(subDir);
    })
    .map(subDir => path.join(dir, subDir));

const npmRunInDirs = (dir: string): void => {
  const librariesJsonPath = path.join(dir, licenseFile);
  const hasLibrariesJson = existsSync(librariesJsonPath);

  if (hasLibrariesJson) {
    paths.push(librariesJsonPath);
  }

  getDirs(dir).forEach(npmRunInDirs);
};

const listLibraries = (dir: string): void => {
  try {
    npmRunInDirs(dir);

    const jsonContent = paths.reduce(
      (data: Libraries, path: string): Libraries => {
        const newLibs = getLibraries(path);

        unlinkSync(path);

        return { ...data, ...newLibs };
      },
      {}
    );

    const markdownContent = prepareContent(jsonContent);

    if (saveAsJson) {
      writeFileSync(`${targetFile}.json`, JSON.stringify(jsonContent), 'utf8');
    }
    writeFileSync(`${targetFile}.md`, markdownContent, 'utf8');
  } catch (error) {
    console.error(error);
  }
};

listLibraries(root);
