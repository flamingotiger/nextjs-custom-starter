import React, { useEffect } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import Nav from '../src/components/nav';
import { FakeActionType } from '../src/store/reducers/fake';
import { RootState } from '../src/store/reducers';
import { FakePostItem } from '../src/api/types';

const Home: React.FC = () => {
	const dispatch = useDispatch();
	const postState = useSelector((state: RootState) => state.fake);
	useEffect(() => {
		dispatch({ type: FakeActionType.GET_FAKE_LIST_REQUEST });
	}, [dispatch]);

	return (
		<div>
			<Head>
				<title>Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Nav />
			{postState.list.length >= 0 &&
				postState.list.map((item: FakePostItem) => {
					return (
						<div key={item.id}>
							<strong>{item.title}</strong>
							<p>{item.body}</p>
						</div>
					);
				})}
		</div>
	);
};

export default Home;
