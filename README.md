# game monitor

![game monitor](./docs/img/game-monitor.png)

## Version

0.0.1

## Available scripts

```bash
 "audit": runs npm audit in root and for all packages
 "bootstrap": install all packages dependencies and links any cross dependencies
 "build": build project for production
 "check": runs lint, format and stylelint, test, compile and clean scripts together,
 "clean": removes node_modules from al packages,
 "clean:compiled": removes files created via `compile` script,
 "compile": runs TypeScript for all packages
 "create": creates a new lerna-managed package
 "format": formats all the files using Prettier,
 "format:fix": formats and fix all the files using Prettier,
 "libs:root": generates third party libraries list for root directory,
 "libs": generates third party libraries for whole project,
 "lint": lint all the files using eslint,
 "lint:fix": lint and fix all files using eslint,
 "outdated": runs npm outdated for root and for all packages,
 "postinstall": runs bootstrap and hooks scripts,
 "prepare": install git hooks,
 "prepare-commit-msg": runs prepare-commit-msg hook,
 "pre-commit": runs pre-commit hook,
 "pre-push": runs pre-push hook,
 "reset": runs clean script and runs npm ci,
 "start": runs project for development,
 "stylelint": lint all style files,
 "stylelint:fix": lint and fix all style files,
 "test": run tests or all packages
```

## Third party libraries

[List of libraries we use](https://github.com/aleksanderfret/game-moniotor/blob/master/third-party-libraries.md)
