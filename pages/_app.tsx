import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import GlobalStyles from '../src/common/styles/global-styles';
import store from '../src/store';

class ReactApp extends App<any> {
	static async getInitialProps({ Component, ctx }) {
		const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
		return { pageProps };
	}

	public render() {
		const { Component, pageProps, store } = this.props;
		return (
			<>
				<GlobalStyles />
				<Provider store={store}>
					<Component {...pageProps} />
				</Provider>
			</>
		);
	}
}

export default withRedux(() => store, { debug: process.env.NODE_ENV === 'development' })(ReactApp);
