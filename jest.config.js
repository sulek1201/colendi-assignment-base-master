module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testRegex: '\\.spec.ts$',
  transform: { '^.+\\.(t|j)s$': 'ts-jest' },
  moduleNameMapper: {
    '^@controllers/(.*)$': '<rootDir>/src/controllers/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@entities/(.*)$': '<rootDir>/src/db/entities/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@db/(.*)$': '<rootDir>/src/db/$1',
    '^@modules/(.*)$': '<rootDir>/src/modules/$1',
  },
  collectCoverageFrom: [
    '**/src/**',
    '**/src/**/**',
    '!**/db/**',
    '!**/src/utils/**',
    '!**/src/config/**',
    '!**/src/*',
    '!**/src/modules/logger.ts',
    '!**/src/i18n/**',
  ],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      autoMapModuleNames: true,
    },
  },
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 79,
      functions: 90,
      lines: 90,
    },
  },
};
