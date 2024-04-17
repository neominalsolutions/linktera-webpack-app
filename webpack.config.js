const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = (env) => {
	const isProduction = env.production;
	const isStaging = env.staging;
	const isDevelopment = env.development;

	console.log('env', env);

	let envFile = '.env.production';

	if (isStaging) {
		envFile = '.env.staging';
	} else if (isDevelopment) {
		envFile = '.env.development';
	}

	console.log('isStaging', isStaging);

	const envPath = path.resolve(__dirname, envFile);
	const envVars = require('dotenv').config({ path: envPath }).parsed || {};

	return {
		mode: isProduction ? 'production' : 'development',
		devServer: {
			port: 3001,
			historyApiFallback: true,
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
			new webpack.DefinePlugin({
				'process.env': JSON.stringify(envVars),
			}),
		],
	};
};
