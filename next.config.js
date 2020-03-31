const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const withOptimizedImages = require('next-optimized-images');

require('dotenv').config();

module.exports = withOptimizedImages({
	typescript: {
		ignoreDevErrors: true
	},
	distDir: './dist',
	imagesName: '[hash].[ext]',
	target: 'serverless',
	env: {
		BACKEND_URL: process.env.BACKEND_URL,
		FAKE_URL: process.env.FAKE_URL,
		PORT: process.env.PORT
	},
	webpack(config) {
		// eslint-disable-next-line no-param-reassign
		config.resolve.plugins = [
			new TsconfigPathsPlugin({
				configFile: path.resolve(__dirname, './tsconfig.json')
			})
		];
		return config;
	}
});

