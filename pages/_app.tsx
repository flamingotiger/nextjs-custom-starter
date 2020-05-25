import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import GlobalStyles from '../src/styles/global-styles';
import { ThemeProvider } from '../src/styles/themed-components';
import theme from '../src/styles/theme';
import store from '../src/store';

class ReactApp extends App<any> {
	static async getInitialProps({ Component, ctx }: any) {
		const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
		return { pageProps };
	}

	public render() {
		const { Component, pageProps } = this.props;
		return (
			<>
				<ThemeProvider theme={theme}>
					<Provider store={store}>
						<Component {...pageProps} />
						<GlobalStyles />
					</Provider>
				</ThemeProvider>
			</>
		);
	}
}

export default withRedux(() => store, { debug: false })(ReactApp);
