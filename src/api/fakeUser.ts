import { FakeUser } from './types';
import uuid from 'uuid';

export const FakeUserApi = new Promise(resolve => {
	const user: FakeUser = {
		email: 'fakeuser@email.com',
		id: uuid.v4(),
		name: 'username',
		admin: true
	};
	resolve(user);
});
