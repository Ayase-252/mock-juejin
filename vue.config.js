const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        style: path.resolve(__dirname, 'src/style'),
        business: path.resolve(__dirname, 'src/components/business'),
        ui: path.resolve(__dirname, 'src/components/ui'),
        views: path.resolve(__dirname, 'src/views'),
        api: path.resolve(__dirname, 'src/api/index'),
        libs: path.resolve(__dirname, 'src/libs')
      }
    }
  }
}