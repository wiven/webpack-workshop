var HtmlWebpackPlugin = require("html-webpack-plugin");

var webpackConfig = {
	entry: "./src/index.js",
	output: {
		path: "build",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				loader: "babel-loader",
				test: /\.js$/
			},
			{
				loaders:["style", "css", "sass"],
				test: /\.scss$/
			},
			{
				loaders:["url", "img"],
				test: /\.png$/
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.ejs"
		})
	]
};

module.exports = webpackConfig;
