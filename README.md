# Games Room

![games room](./docs/img/games-room.png)

## Version

0.0.1

## Documentation

### Installation

#### 1. Install node.js 14.17.6

#### 2. Install npm 7.22.0

#### 3. Clone the repository

```bash
git clone https://github.com/aleksanderfret/games-room.git
```

#### 4. Go to the directory

```bash
cd games-room
```

#### 5. Init project

```bash
npm run init
```

#### 6. Start development

```bash
npm start
```

## Available scripts

```bash
 "audit": runs npm audit in root and for in packages
 "bootstrap": install all packages dependencies and links any cross dependencies
 "build": build project for production
 "check": runs lint, format and stylelint, test, compile and clean scripts together,
 "clean": removes node_modules from al packages,
 "clean:compiled": removes files created via `compile` script,
 "compile": runs TypeScript for all packages
 "create": creates a new lerna-managed package
 "format": formats all the files using Prettier,
 "format:fix": formats and fix all the files using Prettier,
 "init": installs dependencies and bootstrap project,
 "libs:root": generates third party libraries list for root directory,
 "libs": generates third party libraries for whole project,
 "lint": lint all the files using eslint,
 "lint:fix": lint and fix all files using eslint,
 "outdated": runs npm outdated for root and in all packages,
 "postinstall": runs bootstrap and hooks scripts,
 "prepare": install git hooks,
 "prepare-commit-msg": runs prepare-commit-msg hook,
 "pre-commit": runs pre-commit hook,
 "pre-push": runs pre-push hook,
 "reset": runs clean script and runs npm ci,
 "snapshot:update": updates test snapshots in all packages,
 "start": runs project for development,
 "storybook": runs storybook in all client packages,
 "stylelint": lint all style files,
 "test": run tests or all packages
```

## Third party libraries

[List of libraries we use](https://github.com/aleksanderfret/games-room/blob/master/third-party-libraries.md)
