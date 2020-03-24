import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Error = {
	Wrapper: styled.div`
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100vw;
		height: 100vh;
	`,
	Title: styled.h3`
		color: #fdd835;
		text-align: center;
		font-size: 2rem;
		font-weight: bold;
		margin-bottom: 1rem;
	`,
	Text: styled.div`
		color: #fdd835;
		text-align: center;
	`,
	Button: styled.a`
		background-color: #fdd835;
		width: 10rem;
		height: 2rem;
		border-radius: 2rem;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.875rem;
		margin: 1.25rem auto 0 auto;
	`
};

const Custom404: React.FC = () => {
	return (
		<Error.Wrapper>
			<div>
				<Error.Title>404 ERROR</Error.Title>
				<Error.Text>Sorry, Not found page</Error.Text>
				<Link href="/">
					<Error.Button href="/">Home</Error.Button>
				</Link>
			</div>
		</Error.Wrapper>
	);
};

export default Custom404;
