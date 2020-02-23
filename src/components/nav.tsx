import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Button = styled.button`
	background-color: #fdd835;
	height: 40px;
	width: 160px;
	text-align: center;
	line-height: 30px;
	font-size: 20px;
	font-weight: bold;
	color: white;
	margin: 0 10px;
	transition: background-color 0.3s;

	&:active {
		background-color: #fbc02d;
	}

	a {
		display: flex;
		width: 100%;
		height: 100%;
		align-items: center;
		justify-content: center;
	}
`;

const Ul = styled.ul`
	display: flex;
`;

const Nav = () => (
	<nav>
		<Ul>
			<li>
				<Button>
					<Link href="/">
						<a href="/">List</a>
					</Link>
				</Button>
			</li>
			<li>
				<Button>
					<Link href="/form">
						<a href="/form">Form</a>
					</Link>
				</Button>
			</li>
		</Ul>
	</nav>
);

export default Nav;
