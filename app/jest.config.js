module.exports = {
  roots: ['<rootDir>/src'],
  globals: {},
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/app.module.ts',
    '!<rootDir>/src/main.ts'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  setupFiles: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '@applications/(.*)': '<rootDir>/src/application/$1',
    '@business/(.*)': '<rootDir>/src/business/$1',
    '@infrastructure/(.*)': '<rootDir>/src/frameworks/$1',
    '@interfaces/(.*)': '<rootDir>/src/interfaces/$1',
    '@shared/(.*)': '<rootDir>/src/shared/$1'
  }
}
