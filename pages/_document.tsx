import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

interface Props {
	styleTags: Array<React.ReactElement<{}>>;
}

export default class MyDocument extends Document<Props> {
	static getInitialProps({ renderPage }: any) {
		const sheet = new ServerStyleSheet();
		const page = renderPage((App: any) => (props: any) => sheet.collectStyles(<App {...props} />));

		const styleTags = sheet.getStyleElement();
		return { ...page, styleTags };
	}

	render() {
		return (
			<html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					{this.props.styleTags}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
