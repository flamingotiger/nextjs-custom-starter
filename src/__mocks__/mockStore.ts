import createMockStore, { MockStore } from 'redux-mock-store';
import store from '../store/index';
import * as ReactRedux from 'react-redux';

const mockStore = createMockStore([]);
const makeMockStore = (state = store.getState() || {}): MockStore<unknown> & { dispatch: {} } => {
	const store = mockStore({ ...state });
	return store;
};

export const mockUseReactRedux = () => {
	/* mocking useSelector on our mock store */
	const spyUseSelector = jest.spyOn(ReactRedux, 'useSelector');
	spyUseSelector.mockImplementation(() => store.getState());
	/* mocking useDispatch on our mock store  */
	const spyDispatch = jest.spyOn(ReactRedux, 'useDispatch');
	spyDispatch.mockImplementation(() => store.dispatch);
};

export default makeMockStore;
