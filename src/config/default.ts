export type Characters = string | number;
export type IndexKey<V> = { [key in Characters]: V };
export type UniqueId = { _id?: string };
export type params = { populate?: string; filter?: string };
export type QueryId = string | string[] | undefined;
export type DatedAt = {
	createdAt?: string;
	updatedAt?: string;
};
