import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import {StateSchema} from "app/providers/StoreProvider";
import { Post } from "entities/Post";
import {
    getPostPageLimit,
    getPostPageNumber,
    getPostPageOrder,
    getPostPageSearch,
    getPostPageSort
} from "../selectors/postSelectors";
export const fetchPosts = createAsyncThunk<
    Post[],
    void,
    { rejectValue: string, state: StateSchema }
>(
    'postsPage/fetchPosts',
    async (props, thunkAPI) => {
        const { rejectWithValue, getState } = thunkAPI;
        const limit = getPostPageLimit(getState());
        const page = getPostPageNumber(getState());
        const sort = getPostPageSort(getState());
        const order = getPostPageOrder(getState());
        const search = getPostPageSearch(getState());

        try {
            const response = await axios<Post[]>("https://jsonplaceholder.typicode.com/posts", {
                params: {
                    _page: page,
                    _limit: limit,
                    _sort: sort,
                    _order: order,
                    q: search
                }
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('Error');
        }
    },
);
