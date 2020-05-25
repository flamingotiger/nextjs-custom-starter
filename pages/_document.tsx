import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

interface Props {
	styleTags: Array<React.ReactElement<{}>>;
}

export default class MyDocument extends Document<Props> {
	static async getInitialProps(ctx: any) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App: any) => (props: Props) => sheet.collectStyles(<App {...props} />)
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				)
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					{/* favicon make url: https://www.favicon-generator.org/ */}
					<link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
					<link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
					<link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
					<link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
					<link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
					<link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
					<link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
					<link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
					<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
					<link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
					<link rel="manifest" href="/manifest.json" />
					<meta name="msapplication-TileColor" content="#ffffff" />
					<meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
					<meta name="theme-color" content="#ffffff" />
					{this.props.styleTags}
				</Head>
				<body>
					{/* modal portal */}
					<div id="modal" />
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
