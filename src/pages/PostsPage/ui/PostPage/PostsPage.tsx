import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {useAppDispatch} from "shared/hooks/useAppDispatch";
import {PostList, PostSortField} from "entities/Post";
import {SortOrder} from "shared/const/SortOrder";
import {fetchPosts} from "../../model/services/fetchPosts";
import {
    getPostPageData,
    getPostPageError,
    getPostPageLoading,
    getPostPageNumber, getPostPageOrder,
    getPostPageSearch, getPostPageSort
} from "../../model/selectors/postSelectors";
import {PostPageHeader} from "../PostPageHeader/PostPageHeader";
import {PostPagePagination} from "../PostPagePagination/PostPagePagination";
import {postsActions} from "../../model/slices/postsSlice";
import './PostPage.css'

export const PostsPage = () => {
    const loading = useSelector(getPostPageLoading);
    const error = useSelector(getPostPageError);
    const posts = useSelector(getPostPageData);
    const pageNumber = useSelector(getPostPageNumber);
    const search = useSelector(getPostPageSearch);
    const sort = useSelector(getPostPageSort);
    const order = useSelector(getPostPageOrder);

    const [searchParams, setSearchParams] = useSearchParams()
    const pageNumberFromURL = Number(searchParams.get('page')) || 1;
    const searchFromURL = searchParams.get("search") || '';
    const dispatch = useAppDispatch();


    useEffect(() => {
        console.log('INIT')
        dispatch(postsActions.setPageNumber(pageNumberFromURL));
        dispatch(postsActions.setSearch(searchFromURL));
        dispatch(fetchPosts());
    }, [])

    useEffect(() => {
        setSearchParams({search: search, page: String(pageNumber)});
    }, [pageNumber, search, setSearchParams])


    const onSortChange = (sort: PostSortField, order: SortOrder) => {
        dispatch(postsActions.setSort(sort));
        dispatch(postsActions.setOrder(order));
        dispatch(fetchPosts());
    }


    if (error) {
        return (
            <h1>Error occured</h1>
        )
    }


    return (
        <div className="posts-page">
            <PostPageHeader />
            <PostList
                isLoading={loading}
                posts={posts}
                sort={sort}
                order={order}
                onSortChange={onSortChange}
            />
            <PostPagePagination />
        </div>
    );
};
