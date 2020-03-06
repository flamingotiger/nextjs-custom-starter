import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FakeActionType } from '../src/store/reducers/fake';
import { FakePostItem } from '../src/api/types';
import { RootState } from 'src/store/reducers';

const Post: React.FC = () => {
	const fakes = useSelector((state: RootState) => state.fake.list);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch({ type: FakeActionType.GET_FAKE_LIST_REQUEST });
	}, []);
	return (
		<div>
			{fakes.map((fake: FakePostItem) => (
				<div key={fake.id}>
					<h3 style={{ fontSize: '20px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '20px' }}>
						{fake.title}
					</h3>
					<p style={{ fontSize: '14px' }}>{fake.body}</p>
				</div>
			))}
		</div>
	);
};

export default Post;
