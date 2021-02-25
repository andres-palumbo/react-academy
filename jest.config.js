module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  coverageReporters: ['text'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  testEnvironment: 'node',
  moduleNameMapper: {
    '^~/(.*)': '<rootDir>/src/$1',
    // This is to mock CSS imports
    '\\.css$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
};
