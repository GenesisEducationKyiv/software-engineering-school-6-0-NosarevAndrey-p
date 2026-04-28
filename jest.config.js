export default {
  testEnvironment: 'node',
  transform: {},
  // extensionsToTreatAsEsm: ['.js'],
  moduleNameMapper: {},
  testMatch: ['**/__tests__/**/*.test.js'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
};

// export default {
//   preset: 'ts-jest',
//   testEnvironment: 'node',
//   moduleNameMapper: {
//     '^@/(.*)$': '<rootDir>/src/$1',
//   },
//   moduleFileExtensions: ['ts', 'js', 'json'],
//   testMatch: ['**/__tests__/**/*.test.js'],
// };