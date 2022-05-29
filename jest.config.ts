"use strict";

import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['./src/tests/bootstrap.ts'],
  forceExit:true,
  testMatch: [
    '<rootDir>/src/tests/unit/*.test.ts',
    '<rootDir>/src/tests/integration/*.test.ts'

]
};
export default config;