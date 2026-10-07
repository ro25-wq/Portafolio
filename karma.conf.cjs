const coveragePlugin = require('./coverage-plugin.cjs')

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    files: [
      { pattern: 'src/**/*.spec.js', watched: false }
    ],

    preprocessors: {
      'src/**/*.spec.js': ['esbuild']
    },

    esbuild: {
      target: 'es2020',
      jsx: 'automatic',
      define: {
        'process.env.NODE_ENV': '"test"'
      },
      loader: {
        '.js': 'jsx',
        '.jsx': 'jsx',
        '.jpg': 'dataurl',
        '.jpeg': 'dataurl',
        '.png': 'dataurl',
        '.svg': 'dataurl'
      },
      plugins: [coveragePlugin]
    },

    reporters: ['progress', 'coverage'],

    coverageReporter: {
      dir: 'coverage',
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' },
        { type: 'lcov' }
      ]
    },

    browsers: ['ChromeHeadless'],
    singleRun: true
  })
}