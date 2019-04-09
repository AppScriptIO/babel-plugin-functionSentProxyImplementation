const { getBabelConfig } = require('@dependency/javascriptTranspilation')

module.exports = api => getBabelConfig('serverRuntime.BabelConfig.js').babelConfig
