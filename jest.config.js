const config = {
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
      '**/routes/**'
    ],
    coverageDirectory: '/src/tests/coverage/',
    coverageProvider: 'babel',
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: -5
      }
    },
    testMatch: ['**/src/tests/**/*.js']
  };
  
  export default config;