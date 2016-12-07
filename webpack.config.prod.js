import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const OUTPUT_PATH = '../../dolphin-service/dolphin-static-service/static/voice/'
//const OUTPUT_PATH = 'dist'
const webpackConfig = {
  context: path.join(__dirname, 'src'),
  devtool: null,
  resolve: {
    alias: {
      'components': path.join(__dirname, 'src/components')
    }
  },
  extensions: ['', '.js', '.jsx'],
  module: {},
}

// ------------------------------------
// Entry Points
// ------------------------------------
webpackConfig.entry = {
  app: './main.js',
  vendor: [
    'react',
    'react-dom',
    'echarts',
  ],
}

// ------------------------------------
// Bundle Output
// ------------------------------------
webpackConfig.output = {
  filename: `[name].[chunkhash].js`,
  path: path.join(__dirname, OUTPUT_PATH),
  publicPath: ''
}

// ------------------------------------
// Plugins
// ------------------------------------
webpackConfig.plugins = [
  new webpack.DefinePlugin({
    'process.env'  : {
      'NODE_ENV' : JSON.stringify('production')
    },
    'NODE_ENV'     : 'production',
    '__DEV__'      : false,
    '__PROD__'     : true,
  }),
  new HtmlWebpackPlugin({
    template: 'index.prod.html',
    hash: false,
    favicon: 'favicon.png',
    filename: 'index.html',
    inject: 'body',
    minify: {
      collapseWhitespace: true
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    names: ['vendor']
  }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      unused: true,
      dead_code: true,
      warnings: false
    }
  })
]

// ------------------------------------
// Pre-Loaders
// ------------------------------------
webpackConfig.module.preLoaders = [{
  test: /\.(js|jsx)$/,
  loader: 'eslint',
  exclude: /node_modules/
}]

webpackConfig.eslint = {
  configFile: './.eslintrc',
  emitWarning: false
}

// ------------------------------------
// Loaders
// ------------------------------------
webpackConfig.module.loaders = [
  {
    test: /\.(js|jsx)$/,
    include: path.join(__dirname, 'src'),
    loader: 'babel',
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
    loaders: ['style', 'css', 'postcss', 'less?sourceMap']
  }
)
''
console.log('>>> WebpackConfig:Apply ExtractTextPlugin to CSS loaders.')
webpackConfig.module.loaders.filter((loader) =>
  loader.loaders && loader.loaders.find((name) => /css/.test(name.split('?')[0]))
).forEach((loader) => {
  const [first, ...rest] = loader.loaders
  loader.loader = ExtractTextPlugin.extract(first, rest.join('!'))
  delete loader.loaders
})

webpackConfig.plugins.push(
  new ExtractTextPlugin('[name].[contenthash].css', {
    allChunks: true
  })
)

export default webpackConfig
