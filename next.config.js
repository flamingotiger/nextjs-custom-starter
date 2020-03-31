/* eslint-disable no-param-reassign */
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const withOptimizedImages = require('next-optimized-images');
const nodeExternals = require('webpack-node-externals');

require('dotenv').config();

module.exports = withOptimizedImages({
	typescript: {
		ignoreDevErrors: true
	},
	imagesName: '[hash].[ext]',
	target: 'serverless',
	env: {
		BACKEND_URL: process.env.BACKEND_URL,
		FAKE_URL: process.env.FAKE_URL,
		PORT: process.env.PORT
	},
	webpack(config) {
		config.resolve.plugins = [
			new TsconfigPathsPlugin({
				configFile: path.resolve(__dirname, './tsconfig.json')
			})
		];
		config.externals = nodeExternals();
		return config;
	}
});
