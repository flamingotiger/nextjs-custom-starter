import axios from './index';
import { FakePostItem } from './types';

const endpoint = 'https://jsonplaceholder.typicode.com/posts';

export const FakeGetListApi = (params): Promise<FakePostItem[]> => {
	return axios.get(endpoint, { params });
};

export const FakeGetItemApi = (id, params): Promise<FakePostItem> => {
	return axios.get(endpoint + id, { params });
};

export const FakeDeleteItemApi = (params): Promise<FakePostItem> => {
	return axios.delete(endpoint, { params });
};

export const FakeUpdateItemApi = (params, body): Promise<FakePostItem> => {
	return axios.put(endpoint, body, { params });
};

export const FakeAddItemApi = (id, body): Promise<FakePostItem> => {
	return axios.post(endpoint + id, body);
};
