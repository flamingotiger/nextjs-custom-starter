import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Button = styled.button`
	background-color: deepskyblue;
	height: 40px;
	width: 160px;
	text-align: center;
	line-height: 30px;
	border-radius: 5px;
	font-size: 20px;
	font-weight: bold;
	color: white;
	transition: background-color 0.3s;

	&:active {
		background-color: lightskyblue;
	}
`;

const Nav = () => (
	<nav>
		<ul>
			<li>
				<Link href="/">
					<a href="/">Home</a>
				</Link>
			</li>
		</ul>
		<Button>button</Button>
	</nav>
);

export default Nav;
