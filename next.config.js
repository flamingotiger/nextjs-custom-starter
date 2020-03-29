const withCSS = require('@zeit/next-css');

require('dotenv').config();

module.exports = withCSS({
	typescript: {
		ignoreDevErrors: true
	},
	target: 'serverless',
	distDir: '.build',
	env: {
		BACKEND_URL: process.env.BACKEND_URL,
		FAKE_URL: process.env.FAKE_URL,
		PORT: process.env.PORT
	}
});
