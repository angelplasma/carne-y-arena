// from gatsby-plugin-sass/src/gatsby-node.js
const ExtractTextPlugin = require(`extract-text-webpack-plugin`)
const { cssModulesConfig } = require(`gatsby-1-config-css-modules`)

exports.modifyWebpackConfig = ({ config, stage }, options) => {
  const sassFiles = /\.s[ac]ss$/
  const sassModulesFiles = /\.module\.s[ac]ss$/
  const sassLoader = `sass?${JSON.stringify(options)}`

  switch (stage) {
    case `develop`: {
      config.loader(`sass`, {
        test: sassFiles,
        exclude: sassModulesFiles,
        loaders: [`style`, `css`, 'postcss', sassLoader],
      })

      config.loader(`sassModules`, {
        test: sassModulesFiles,
        loaders: [`style`, cssModulesConfig(stage), 'postcss', sassLoader],
      })
      return config
    }
    case `build-css`: {
      config.loader(`sass`, {
        test: sassFiles,
        exclude: sassModulesFiles,
        loader: ExtractTextPlugin.extract([`css?minimize`, 'postcss', sassLoader]),
      })

      config.loader(`sassModules`, {
        test: sassModulesFiles,
        loader: ExtractTextPlugin.extract(`style`, [
          cssModulesConfig(stage),
          'postcss',
          sassLoader,
        ]),
      })
      return config
    }
    case `develop-html`:
    case `build-html`:
    case `build-javascript`: {
      config.loader(`sass`, {
        test: sassFiles,
        exclude: sassModulesFiles,
        loader: `null`,
      })

      config.loader(`sassModules`, {
        test: sassModulesFiles,
        loader: ExtractTextPlugin.extract(`style`, [
          cssModulesConfig(stage),
          'postcss',
          sassLoader,
        ]),
      })
      return config
    }
    default: {
      return config
    }
  }
}
