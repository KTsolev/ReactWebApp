var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './js/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js',
      },
      plugins: [
        new webpack.DefinePlugin({
           'process.env': {
               'NODE_ENV': '"production"',
               'API_KEY': '"80748eb5cde3054fde1a27cec4f332a6"',
               'SECRET_KEY': '"4631d696dd76bb6d94adbc9fe41f489e"',
               'BASE_URL_PROD': '"http://anna-tzoleva.com"',
               'BASE_URL_DEV': '"http//localhost"'
           }
       })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                  },
              },
        ],
      },
    stats: {
        colors: true,
      },
    devtool: 'source-map',
  };
