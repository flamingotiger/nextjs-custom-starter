const withCSS = require('@zeit/next-css');
const withTypescript = require('@zeit/next-typescript');

require('dotenv').config();

module.exports = withTypescript(
	withCSS({
		typescript: {
			ignoreDevErrors: true
		},
		target: 'serverless',
		env: {
			BACKEND_URL: process.env.BACKEND_URL,
			FAKE_URL: process.env.FAKE_URL,
			PORT: process.env.PORT
		}
	})
);
