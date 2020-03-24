import axios from './index';
import { FakePostItem } from './types';

const endpoint = process.env.FAKE_URL || '';

class FakeApi {
	list = (params: any): Promise<FakePostItem[]> => axios.get(endpoint, { params });
	get = (id: string, params: any): Promise<FakePostItem> => axios.get(endpoint + id, { params });
	delete = (id: string): Promise<FakePostItem> => axios.delete(endpoint + id);
	update = (id: string, body: FakePostItem, params: any): Promise<FakePostItem> =>
		axios.put(endpoint + id, body, { params });
	add = (body: FakePostItem): Promise<FakePostItem> => axios.post(endpoint, body);
}

export default FakeApi;
