var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  
  output: {
    path: __dirname + '/dist',
    filename: 'app.bundle.js'
  },  
  plugins: [
    new HtmlWebpackPlugin({
    title:'第一次的webpack',
    template: './src/index.html',
    filename: 'index.html',
    minify: {
      collapseWhitespace: true,
    },
    hash: true,
  }),
  new HtmlWebpackPlugin({
    title:'yaaaaaa',
    template: './src/yaa.html',
    filename: 'yaa.html',
    minify: {
      collapseWhitespace: true,
    },
    hash: true,
  }),
  new HtmlWebpackPlugin({
    title:'yaaaaaa',
    template: './src/index.pug',
    filename: 'index.pug',
    minify: {
      collapseWhitespace: true,
    },
    hash: true,
  }),
  new HtmlWebpackPlugin({
    title:'颜色1',
    template: './src/game-yanse1.html',
    filename: 'game-yanse1.html',
    minify: {
      collapseWhitespace: true,
    },
    hash: true,
  }),
  new HtmlWebpackPlugin({
    title:'npm',
    template: './src/npm.html',
    filename: 'npm.html',
    minify: {
      collapseWhitespace: true,
    },
    inject: true,
    hash: true,
  }),

  new HtmlWebpackPlugin({
    // 这里注意一下，不再用 pug 模板，还是用回之前的 index.html
    template: './src/index.html',
    filename: 'index.html',
    minify: {
      collapseWhitespace: true,
    },
    hash: true,
    excludeChunks: ['contact']
  }),
],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader' ,'sass-loader']
      },
      { test: /\.pug$/, loader: ['raw-loader', 'pug-html-loader'] },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          },
        ]
      },
      {
        test: /\.html$/,
        use: [ {
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }],
      }
    ]
  },
  devServer: {
    port: 9000,
    open:true
  }
};
