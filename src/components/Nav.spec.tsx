import React from 'react';
import { mount } from 'enzyme';
import Nav from './Nav';
import { mockUseReactRedux } from '../__mocks__/mockStore';

describe('<Nav/>', () => {
	beforeAll(() => {
		mockUseReactRedux();
	});
	it('match snapshot', () => {
		const wrapper = mount(<Nav />);
		expect(wrapper).toMatchSnapshot();
	});
});
