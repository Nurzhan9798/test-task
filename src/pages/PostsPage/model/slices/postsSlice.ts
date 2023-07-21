import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {SortOrder} from "shared/const/SortOrder";
import {PostSchema} from "../types/postSchema";
import {fetchPosts} from "../services/fetchPosts";
import {PostSortField} from "../../../../entities/Post";

// Define the initial state using that type
const initialState: PostSchema = {
    data: [],
    isLoading: false,
    error: undefined,
    pageNumber: 1,
    limit: 10,
    search: '',
    sort: PostSortField.ID,
    order: "desc"
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPageNumber: (state, action: PayloadAction<number>) => {
            state.pageNumber = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setSort: (state, action: PayloadAction<PostSortField>) => {
            state.sort = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchPosts.fulfilled, (
                state,
                action,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
})

export const { actions: postsActions, reducer: postsReducer} = postsSlice
