const fs = require('fs')
const { createInstrumenter } = require('istanbul-lib-instrument')

const instrumenter = createInstrumenter({
  esModules: true,
  parserPlugins: ['jsx']
})

module.exports = {
  name: 'istanbul-instrument',
  setup(build) {
    build.onLoad({ filter: /src[\\/].*\.jsx$/ }, async (args) => {
      const source = await fs.promises.readFile(args.path, 'utf8')
      const code = instrumenter.instrumentSync(source, args.path)
      return { contents: code, loader: 'jsx' }
    })
  }
}