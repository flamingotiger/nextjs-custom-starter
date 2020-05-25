const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');
const dotenv = require('dotenv');
const withOptimizedImages = require('next-optimized-images');
const withOffline = require('next-offline');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true'
});

dotenv.config();

const { BACKEND_BASE_URL } = process.env;

const nextConfig = phase => {
	const isDev = phase === PHASE_DEVELOPMENT_SERVER;
	const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';
	const isStaging = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1';

	const env = {
		BACKEND_BASE_URL: (() => {
			if (isDev || isProd || isStaging) return BACKEND_BASE_URL;
			return 'BACKEND_BASE_URL:not (isDev,isProd && !isStaging,isProd && isStaging)';
		})()
	};
	return {
		typescript: {
			ignoreDevErrors: true
		},
		target: 'serverless',
		env,
		webpack(config, { webpack }) {
			config.resolve.modules.push(__dirname);
			config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
			return config;
		}
	};
};

module.exports = phase => withOffline(withOptimizedImages(withBundleAnalyzer(nextConfig(phase))));
