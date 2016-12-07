/**
 * Created by liekkas on 16/4/1.
 */
import webpack from 'webpack'
import webpackConfig from '../webpack.config.prod'
const compiler = webpack(webpackConfig)

console.log('>>> prodCompile:Create webpack compiler.')
compiler.run(function (err, stats) {
  const jsonStats = stats.toJson()

  console.log('>>> prodCompile:Webpack compile completed.')
  console.log(stats.toString({
    chunks : true,
    chunkModules : true,
    colors : true
  }))

  if (err) {
    console.log('>>> prodCompile:Webpack compiler encountered a fatal error.', err)
    process.exit(1)
  } else if (jsonStats.errors.length > 0) {
    console.log('>>> prodCompile:Webpack compiler encountered errors.')
    console.log(jsonStats.errors)
    process.exit(1)
  } else if (jsonStats.warnings.length > 0) {
    console.log('>>> prodCompile:Webpack compiler encountered warnings.')
  } else {
    console.log('>>> prodCompile:No errors or warnings encountered.')
  }
})
