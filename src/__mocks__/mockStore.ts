import createMockStore, { MockStore } from 'redux-mock-store';
import * as ReactRedux from 'react-redux';
import store from '../store/index';

const mockStore = createMockStore([]);
const makeMockStore = (state = store.getState() || {}): MockStore<unknown> & { dispatch: {} } =>
	mockStore({ ...state });

export const mockUseReactRedux = () => {
	/* mocking useSelector on our mock store */
	const spyUseSelector = jest.spyOn(ReactRedux, 'useSelector');
	spyUseSelector.mockImplementation(() => store.getState());
	/* mocking useDispatch on our mock store  */
	const spyDispatch = jest.spyOn(ReactRedux, 'useDispatch');
	spyDispatch.mockImplementation(() => store.dispatch);
};

export default makeMockStore;
