import App from 'next/app';
import React from 'react';
import GlobalStyles from '../src/common/styles/global-styles';

class ReactApp extends App<any> {
	public render() {
		const { Component, pageProps } = this.props;
		return (
			<>
				<GlobalStyles />
				<Component {...pageProps} />
			</>
		);
	}
}

export default ReactApp;
