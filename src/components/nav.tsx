import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import faker from 'faker';
import { RootState } from '../../src/store/reducers';
import { FakeUserActionType } from '../../src/store/reducers/fakeUser';
import { FakeUserApi } from '../../src/api/fakeUser';
import { useTranslation } from '../i18n';

const LoginButton = styled.div`
	color: #ffffff;
	text-align: center;
	line-height: 30px;
	font-size: 18px;
	font-weight: bold;
	margin: 0 10px;
	transition: background-color 0.3s;
	border-radius: 5px;

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

const Button = styled.button`
	background-color: #fdd835;
	height: 50px;
	min-width: 180px;
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
	justify-content: center;
	align-items: center;
	margin-top: 20px;
	margin-bottom: 20px;
`;

const Nav = () => {
	const { t, i18n } = useTranslation();
	const user = useSelector((state: RootState) => state.fakeUser.user);
	const dispatch = useDispatch();
	const login = async () => {
		const userData = await FakeUserApi;
		dispatch({ type: FakeUserActionType.LOGIN_USER, payload: { user: userData } });
	};
	const logout = () => {
		dispatch({ type: FakeUserActionType.LOGOUT_USER });
	};
	return (
		<nav style={{ width: '800px', margin: 'auto' }}>
			<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', margin: '10px 0' }}>
				<LoginButton onClick={user ? () => logout() : () => login()}>
					{user ? (
						<div>
							<img src={faker.image.avatar()} alt={user.name} />
							<p>{user.name}</p>
						</div>
					) : (
						'Login'
					)}
				</LoginButton>
			</div>
			<div style={{ border: '10px solid black' }}>
				<img src="/background_logo.jpg" alt="nextjs custom starter" />
			</div>
			<Ul>
				<li>
					<Button>
						<Link href="/">
							<a href="/">List</a>
						</Link>
					</Button>
					<Button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ko' : 'en')}>
						{t('change-language')}
					</Button>
				</li>
			</Ul>
		</nav>
	);
};

export default Nav;
