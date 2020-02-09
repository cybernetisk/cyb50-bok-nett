module.exports = {
  rootDir: 'src',
  coverageDirectory: '../coverage',
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.test.ts']
}
