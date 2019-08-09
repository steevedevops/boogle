var BundleTracker = require("webpack-bundle-tracker");
var WriteFilePlugin = require("write-file-webpack-plugin");
var devMiddleware = require('webpack-dev-middleware');



module.exports = {
  outputDir: "static",
  devServer: {
    publicPath: "http://localhost:8082/",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Authorization, Accept, Accept-Encoding, Accept-Language, Access-Control-Request-Headers, Access-Control-Request-Method",
      "Access-Control-Allow-Credentials": "true"
    },
    proxy: {
      "/api*": {
        // Forward frontend dev server request for /api to django dev server
        // target: 'http://localhost:8000/',  // This one works as wel since 127.0.0.1 == localhost for me.
        target: "http://127.0.0.1:8000/" // <- django's default
      }
    }
  },

  chainWebpack: config => {
    config.optimization.splitChunks({
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\\/]node_modules[\\\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    })
  },
  configureWebpack: {
    output: {
      filename: 'js/[name].js',
      chunkFilename: 'js/[name].js'
    },
    plugins: [
      new WriteFilePlugin(),
      (process.env.NODE_ENV === "production" ?
        new BundleTracker({
          filename: 'webpack-stats-prod.json',
          publicPath: '/'
        }) :
        new BundleTracker({
          filename: 'webpack-stats-dev.json',
          publicPath: 'http://localhost:8082/'
        })
      )
    ]
  }
}