export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.jest.json'
    }
  },
  moduleDirectories: ['node_modules', 'src'],
  testMatch: ['**/tests/**/*.ts(x|)', '**/?(*.)+(spec|test).ts(x|)']
};
