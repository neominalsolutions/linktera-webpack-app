const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'development',
	devServer: {
		port: 3001,
	},
	entry: './src/index.tsx',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.(s(a|c)ss)$/,
				include: path.resolve(__dirname, 'src'),
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
					'postcss-loader',
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf|svg)$/,
				use: {
					loader: 'url-loader',
				},
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './public/index.html',
		}),
		new MiniCssExtractPlugin(),
	],
};
