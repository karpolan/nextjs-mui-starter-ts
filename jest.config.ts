import type { Config } from 'jest';
import nextJest from 'next/jest.js';

// const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.* and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig: Config = {
  coverageProvider: 'v8',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    // Handle module aliases
    '^@/(.*)$': '<rootDir>/$1',
  },
  // testEnvironment: 'jest-environment-jsdom',
  testEnvironment: 'jsdom',
  // transform: {
  //   '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
  // },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
