import React from 'react';
import styled from 'styled-components';
import { FakePostItem } from '../api/types';
import faker from 'faker';

const Wrapper = styled.div`
	background: white;
	margin: 20px;
	padding: 20px;
	display: flex;
    border-radius: 5px;
`;

const ImageWrapper = styled.div`
	margin: 0 10px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Image = styled.div`
	width: 80px;
	height: 80px;
	border-radius: 50%;
	overflow: hidden;
`;

const Content = styled.div`
	padding-left: 20px;
`;

const H3 = styled.h3`
	font-size: 24px;
	margin-bottom: 10px;
`;

const P = styled.p`
	font-size: 18px;
	font-weight: lighter;
`;
const PostItem: React.FC<{ item: FakePostItem }> = ({ item }) => {
	return (
		<Wrapper>
			<ImageWrapper>
				<Image>
					<img src={faker.image.avatar()} />
				</Image>
			</ImageWrapper>
			<Content>
				<H3>{item.title}</H3>
				<P>{item.body}</P>
			</Content>
		</Wrapper>
	);
};

export default PostItem;
