import {StateSchema} from "app/providers/StoreProvider";



export const getPostPageLoading = (state: StateSchema) => state.postSchema?.isLoading || false;
export const getPostPageData = (state: StateSchema) => state.postSchema?.data;
export const getPostPageError = (state: StateSchema) => state.postSchema?.error;
export const getPostPageNumber = (state: StateSchema) => state.postSchema?.pageNumber || 1;
export const getPostPageLimit = (state: StateSchema) => state.postSchema?.limit || 10;
export const getPostPageSearch = (state: StateSchema) => state.postSchema?.search ?? '';
export const getPostPageSort = (state: StateSchema) => state.postSchema?.sort;
export const getPostPageOrder = (state: StateSchema) => state.postSchema?.order ?? 'desc';
