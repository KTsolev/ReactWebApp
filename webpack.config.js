var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js',
      },
      plugins: [
        new webpack.DefinePlugin({
           'process.env': {
            'API_KEY': '80748eb5cde3054fde1a27cec4f332a6',
            'SECRET_KEY': '4631d696dd76bb6d94adbc9fe41f489e',
            'BASE_URL': 'http://www.anna-tsoleva.com',
            'PORT': 8001,
            'ENDPOINT': '/mailme',
           },
           'default': {
            'API_KEY': '80748eb5cde3054fde1a27cec4f332a6',
            'SECRET_KEY': '4631d696dd76bb6d94adbc9fe41f489e',
            'BASE_URL': 'http://localhost',
            'PORT': 8000,
            'ENDPOINT': '/sendmail',
           }
       })
    ],
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ["@babel/preset-env"],
                  plugins: [
                    "@babel/plugin-proposal-class-properties", 
                    "@babel/plugin-syntax-dynamic-import",
                    ["transform-class-properties", { "spec": true }],
                    "@babel/plugin-syntax-class-properties",
                    "@babel/plugin-transform-arrow-functions",
                    "@babel/plugin-transform-modules-commonjs"
                  ]
                }
              }
            },
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
            },
            {
              test: /\.s[ac]ss$/i,
              use: [
                'style-loader',
                'css-loader',
                {
                  loader: 'sass-loader',
                  options: {
                    // Prefer `dart-sass`
                    implementation: require('sass'),
                  },
                },
              ],
            }, 
            {
              test: /\.html$/i,
              loader: 'html-loader',
            },
            {
              test: /\.(png|jpe?g|gif|mp4)$/i,
              use: [
                {
                  loader: 'file-loader',
                },
              ],
            },
            {
              test: /\.(woff(2)?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                  }
                }
              ]
            }  
        ],
      },
    stats: {
        colors: true,
      }
  };
