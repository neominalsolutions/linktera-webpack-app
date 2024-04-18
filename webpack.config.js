const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webPack = require('webpack');

module.exports = (env) => {
	console.log('env', env);

	const isProduction = env.production;
	const isStaging = env.staging;
	const isDevelopment = env.development;

	let envFile = '.env.production';
	let outDirPath = 'dist/prod';

	if (isStaging) {
		envFile = '.env.staging';
		outDirPath = 'dist/test'
	} else if (isDevelopment) {
		envFile = '.env.development';
		outDirPath = 'dist/dev';
	}



	const envPath = path.resolve(__dirname, envFile);
	const envVars = require('dotenv').config({ path: envPath }).parsed || {};

	return {
		mode: isProduction || isStaging ? 'production' : 'development',
		devServer: {
			port: 3001,
			historyApiFallback: true,
		},
		entry: './src/index.tsx',
		output: {
			filename: 'bundle.js',
			path: path.resolve(__dirname, outDirPath),
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
			new webPack.DefinePlugin({
				'process.env': JSON.stringify(envVars),
			}),
		],
	};
};
