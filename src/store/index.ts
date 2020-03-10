import { applyMiddleware, compose, createStore, Store, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import rootReducer from './reducers';

const configureStore = (): Store => {
	const sagaMiddleware = createSagaMiddleware();
	const middleware: Middleware[] = [sagaMiddleware];
	let composeEnhancers;

	if (process.env.NODE_ENV !== 'production') {
		composeEnhancers =
			(typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
	}

	if (process.env.NODE_ENV === 'production') {
		composeEnhancers = compose;
	}

	const store: Store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

	sagaMiddleware.run(rootSaga);

	return store;
};

const store = configureStore();

(global as any).store = store;

export default store;
