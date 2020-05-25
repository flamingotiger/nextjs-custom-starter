import React from 'react';
import Head from 'next/head';
import HomeContainer from 'src/route/main/Home/HomeContainer';

const Home = () => {
	return (
		<div>
			<Head>
				<title>Home</title>
			</Head>
			<HomeContainer />
		</div>
	);
};

export default Home;
