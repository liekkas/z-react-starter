import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const webpackConfig = {
  devtool: 'eval-cheap-module-source-map',
  resolve: {
    alias: {
      'comp': path.join(__dirname, 'src/components')
    }
  },
  extensions: ['', '.js', '.jsx'],
  module: {},
}

// ------------------------------------
// Entry Points
// ------------------------------------
webpackConfig.entry = {
  app: ['./src/index.js','webpack-hot-middleware/client'],
}

// ------------------------------------
// Bundle Output
// ------------------------------------
webpackConfig.output = {
  filename: `[name].js`,
  path: path.join(__dirname, 'dist'),
}

// ------------------------------------
// Plugins
// ------------------------------------
webpackConfig.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env'  : {
      'NODE_ENV' : JSON.stringify('development')
    },
    'NODE_ENV'     : 'development',
    '__DEV__'      : true,
    '__PROD__'     : false,
  }),
  new HtmlWebpackPlugin({
    template: 'src/index.dev.html',
    hash: false,
    favicon: 'src/favicon.png',
    filename: 'index.html',
    inject: 'body',
  })
]

// ------------------------------------
// Loaders
// ------------------------------------
webpackConfig.module.loaders = [
  {
    test: /\.(js|jsx)$/,
    include: path.join(__dirname, 'src'),
    loaders: ['babel']
  },
  {
    test: /\.json$/,
    loader: 'json'
  },
]

// File loaders
/* eslint-disable */
webpackConfig.module.loaders.push(
  { test: /\.woff(\?.*)?$/,  loader: 'url?limit=10000&mimetype=application/font-woff' },
  { test: /\.woff2(\?.*)?$/, loader: 'url?limit=10000&mimetype=application/font-woff2' },
  { test: /\.otf(\?.*)?$/,   loader: 'file?limit=10000&mimetype=font/opentype' },
  { test: /\.ttf(\?.*)?$/,   loader: 'url?limit=10000&mimetype=application/octet-stream' },
  { test: /\.eot(\?.*)?$/,   loader: 'file' },
  { test: /\.svg(\?.*)?$/,   loader: 'url?limit=10000&mimetype=image/svg+xml' },
  { test: /\.(png|jpg|gif)$/,loader: 'url?limit=8192' }
)
/* eslint-enable */

// ------------------------------------
// Style Loaders
// ------------------------------------
webpackConfig.module.loaders.push(
  {
    test: /\.css/,
    loaders: ['style', 'css?sourceMap', 'postcss']
  },
  {
    test: /\.less$/,
    include: [
      path.resolve(__dirname, './node_modules'),
      path.resolve(__dirname, './src/styles/antd')
    ],
    loaders: ['style', 'css', 'postcss', 'less?sourceMap']
  },
  {
    test: /\.less$/,
    exclude: [
      path.resolve(__dirname, './node_modules'),
      path.resolve(__dirname, './src/styles/antd')
    ],
    loaders: ['style', 'css?modules&localIdentName=[name]__[local]-[hash:base64:5]&importLoaders=1','postcss', 'less?sourceMap']
  }
)

export default webpackConfig
