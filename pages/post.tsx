import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FakeActionType } from '../src/store/reducers/fake';

const Post: React.FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch({ type: FakeActionType.GET_FAKE_LIST_REQUEST });
	}, []);
	return <div>test</div>;
};

export default Post;
