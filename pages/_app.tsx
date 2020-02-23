import App from 'next/app';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import GlobalStyles from '../src/common/styles/global-styles';
import store from '../src/store';

class ReactApp extends App<any, any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			persist: false
		};
	}

	public componentDidMount() {
		this.setState({ persist: true });
	}

	public render() {
		const { Component, pageProps } = this.props;
		const { persist } = this.state;
		return (
			<>
				<GlobalStyles />
				<Provider store={store}>
					{persist ? (
						<PersistGate loading={null} persistor={store.persistor}>
							<Component {...pageProps} />
						</PersistGate>
					) : (
						<Component {...pageProps} />
					)}
				</Provider>
			</>
		);
	}
}

export default ReactApp;
