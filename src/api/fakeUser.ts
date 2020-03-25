import faker from 'faker';
import * as uuid from 'uuid';
import { FakeUser } from './types';

export const FakeUserApi = new Promise(resolve => {
	const user: FakeUser = {
		image: faker.internet.avatar(),
		email: faker.internet.email(),
		id: uuid.v4(),
		name: faker.internet.userName(),
		admin: true
	};
	resolve(user);
});
