import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  sandboxInjectedGlobals: [
    'Math',
  ],
  setupFilesAfterEnv: ['./helpers/askui-helper.ts'],
  testEnvironment: '@askui/jest-allure-circus',
  testEnvironmentOptions: {
    addCodeInReport: false
  },
  testMatch: [ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test|step).[jt]s?(x)" ]
};

// eslint-disable-next-line import/no-default-export
export default config;
