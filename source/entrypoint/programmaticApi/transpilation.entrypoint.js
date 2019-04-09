/* Entrypoint chain */
// • Transpilation (babelJSCompiler)
require('@dependency/javascriptTranspilation')({ babelConfigurationFile: 'serverRuntime.BabelConfig.js' })

// • Run
module.exports = require('./')
