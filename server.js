const express = require("express");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.js");

const app = express();
const fetch = require("node-fetch");

require("dotenv-json")();

const SOURCES = ["PIXABAY", "GIPHY"];

const API_KEYS = {};
SOURCES.forEach(source => {
  API_KEYS[source] = process.env[`API_KEYS_${source}`];
});

const compiler = webpack(webpackConfig);
const LIMIT = 25;

app.use(
  webpackDevMiddleware(compiler, {
    hot: true,
    filename: "bundle.js",
    publicPath: "/",
    stats: {
      colors: true
    },
    historyApiFallback: true
  })
);

app.use(express.static(__dirname + "/www"));

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
});
