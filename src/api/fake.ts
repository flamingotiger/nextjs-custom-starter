import axios from './index';
import { FakePostItem } from './types';

const endpoint = 'https://jsonplaceholder.typicode.com/posts';

export const FakeGetListApi = (params): Promise<FakePostItem[]> => {
	return axios.get(endpoint, { params });
};

export const FakeGetItemApi = (id, params): Promise<FakePostItem> => {
	return axios.get(endpoint + id, { params });
};

export const FakeDeleteItemApi = (id): Promise<FakePostItem> => {
	return axios.delete(endpoint + id);
};

export const FakeUpdateItemApi = (id, params, body): Promise<FakePostItem> => {
	return axios.put(endpoint + id, body, { params });
};

export const FakeAddItemApi = (body): Promise<FakePostItem> => {
	return axios.post(endpoint, body);
};
