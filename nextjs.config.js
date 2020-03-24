const withCSS = require('@zeit/next-css');

module.exports = withCSS({
	typescript: {
		ignoreDevErrors: true
	},
	target: 'serverless',
	env: {
		BACKEND_ENDPOINT: 'http://localhost:8080'
	}
});
