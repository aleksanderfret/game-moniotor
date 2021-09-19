import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.ts', '!src/__tests__/*.*'],
  coverageDirectory: 'coverage',
  displayName: 'server',
  moduleDirectories: ['node_modules', '<rootDir>/src', '<rootDir>/__tests__'],
  moduleNameMapper: {
    '^app/(.*)$': '<rootDir>/src/app/$1',
    '^constants/(.*)$': '<rootDir>/src/constants/$1',
    '^db/(.*)$': '<rootDir>/src/db/$1',
    '^enums/(.*)$': '<rootDir>/src/enums/$1',
    '^env/(.*)$': '<rootDir>/src/env/$1',
    '^errors/(.*)$': '<rootDir>/src/errors/$1',
    '^modules/(.*)$': '<rootDir>/src/modules/$1',
    '^translations/(.*)$': '<rootDir>/src/translations/$1',
    '^types/(.*)$': '<rootDir>/src/types/$1'
  },
  name: 'server',
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/setupTests.ts'],
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).+(ts|js)'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
export default config;
