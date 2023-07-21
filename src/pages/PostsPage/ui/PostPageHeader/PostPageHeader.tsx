import {useSelector} from "react-redux";
import {ChangeEvent, KeyboardEvent, useCallback} from "react";
import {useAppDispatch} from "shared/hooks/useAppDispatch";
import {getPostPageSearch} from "../../model/selectors/postSelectors";
import {postsActions} from "../../model/slices/postsSlice";
import {fetchPosts} from "../../model/services/fetchPosts";
import './PostPageHeader.css'


export const PostPageHeader = () => {
    const search = useSelector(getPostPageSearch);
    const dispatch = useAppDispatch();

    // console.log(SearchIcon)
    const fetchData = useCallback(() => {
        dispatch(postsActions.setPageNumber(1));
        dispatch(fetchPosts());
    }, [dispatch]);

    const onSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(postsActions.setSearch(e.target.value));
    }, [dispatch])

    const onKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        console.log(e.key)
        if (e.key === 'Enter') {
            fetchData();
            console.log('fetchData')
        }
    }, [fetchData]);

    return (
        <div className="search">
            <input
                className="search__input"
                value={search}
                onChange={onSearchChange}
                placeholder="Search"
                onKeyDown={onKeyDown}
            />
            <button
                onClick={fetchData}
            >
                Search
            </button>
        </div>
    );
};
