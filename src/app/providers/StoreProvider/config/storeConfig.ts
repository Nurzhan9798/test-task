import { configureStore } from '@reduxjs/toolkit'
import {StateSchema} from "./StateSchema";
import {postsReducer} from "pages/PostsPage";

export const store = configureStore<StateSchema>({
    reducer: {
        postSchema: postsReducer
    }
})

export type AppDispatch = typeof store.dispatch
