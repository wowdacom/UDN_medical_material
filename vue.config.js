module.exports = {
    publicPath: './',
    filenameHashing: false,
    chainWebpack: config => {
      // common
      config.module.rule('images')
        .use('url-loader')
        .loader('url-loader')
        .tap(options => {
          options = {
            limit: 4096,
            fallback: {
              loader: 'file-loader',
              options: {
                name: 'images/[name].[ext]'
              }
            }
          }
          return options
        })
  }
}