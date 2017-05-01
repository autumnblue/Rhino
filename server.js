const express = require('express')
const path = require('path')
const port = process.env.PORT || 8080
const app = express()
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

// serve static assets normally
// app.use(express.static('/'))
//
// // handle every other route with index.html, which will contain
// // a script tag to your application's JavaScript file(s).
// app.get('*', function (request, response){
//     console.log(path.resolve(__dirname, '../', 'index.html'))
//   response.sendFile(path.resolve(__dirname, '../', 'index.html'))
// })
//
// app.listen(port)

const server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    port: port,
    host: '0.0.0.0'
});

server.listen(8080);
