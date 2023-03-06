module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: false,
  testPathIgnorePatterns: [
    "<rootDir>/__tests__/helpers.ts"
  ]
};
