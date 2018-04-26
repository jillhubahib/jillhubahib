exports.modifyWebpackConfig = ({ config }) => {
  config.merge({
    node: {
      fs: 'empty' // https://github.com/webpack-contrib/css-loader/issues/447
    }
  })

  return config;
}