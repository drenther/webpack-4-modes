/* 
	the plugin that will generate the HTML5 file 
	with the emitted output bundle as a script tag
*/
const HtmlWebpackPlugin = require('html-webpack-plugin');
// importing node path module
const path = require('path');

module.exports = {
	// this is where you can override the default entry point
	entry: './src/index.js',
	// this is where you can override the default output location
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'bundle.js',
	},
	// this is how loaders are used
	module: {
		rules: [
			{
				// regex to run the loader on all files ending with .js only
				test: /\.js$/,
				// we don't wanna run the loader on node_modules contents
				exclude: /node_modules/,
				use: {
					// specifying to use babel-loader
					loader: 'babel-loader',
				},
			},
		],
	},
	// this is how plugins are used
	plugins: [
		new HtmlWebpackPlugin({
			// the HTML5 template to use
			template: './public/index.html',
			// the emitted html file name
			filename: './index.html',
		}),
	],
};
