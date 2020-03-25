import React, { useEffect } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import Nav from '../src/components/nav';
import { FakeActionType } from '../src/store/reducers/fake';
import { RootState } from '../src/store/reducers';
import { FakePostItem } from '../src/api/types';
import PostItem from '../src/components/PostItem';
import { I18nPage, includeDefaultNamespaces } from '../src/i18n';

const Home: I18nPage = () => {
	const dispatch = useDispatch();
	const postList = useSelector((state: RootState) => state.fake.list);

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
			<div style={{ width: '800px', margin: 'auto' }}>
				{postList.length >= 0 && postList.map((item: FakePostItem) => <PostItem key={item.id} item={item} />)}
			</div>
		</div>
	);
};

Home.getInitialProps = async () => ({
	namespacesRequired: includeDefaultNamespaces(['common', 'home'])
});

export default Home;
