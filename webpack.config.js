var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './frontend/Global/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.(js)$/, use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/, use: ['style-loader', 'css-loader'],
				exclude: /node_modules/
			}
		]
	},
	mode: 'development',
	devServer: {
	    historyApiFallback: true,
	    contentBase: path.join(__dirname, "build"),
    	hot: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'frontend/Global/index.html'
		})
	]
}