import {useSelector} from "react-redux";
import {classNames} from "shared/lib/classNames/classNames";
import {useAppDispatch} from "shared/hooks/useAppDispatch";
import {getPostPageNumber} from "../../model/selectors/postSelectors";
import {postsActions} from "../../model/slices/postsSlice";
import {fetchPosts} from "../../model/services/fetchPosts";
import './PostPagePagination.css';

interface PostPagePaginationProps {
    onPaginationChange?: (pageNumber: number) => void;
}
export const PostPagePagination = (props: PostPagePaginationProps) => {
    const { onPaginationChange } = props;
    const pageNumber = useSelector(getPostPageNumber);
    const dispatch = useAppDispatch();

    const fetchPostsFromPageNumber = (pageNumber: number) => {
        dispatch(postsActions.setPageNumber(pageNumber));

        dispatch(fetchPosts());
        if (onPaginationChange) onPaginationChange(pageNumber);
    }
    const onClick = (pageNumber: number) => {
        fetchPostsFromPageNumber(pageNumber);
    }

    const onClickPrev = () => {
        fetchPostsFromPageNumber(pageNumber - 1);
    }
    const onClickNext = () => {
        fetchPostsFromPageNumber(pageNumber + 1);
    }

    return (
        <div className="pagination">
            <button
                className="pagination__btn"
                onClick={onClickPrev}
                disabled={pageNumber === 1}
            >
                Prev
            </button>
            <div>
                {
                    new Array(10)
                        .fill(0)
                        .map((item, index) => (
                            <button
                                key={index}
                                onClick={() => onClick(index + 1)}
                                className={classNames(
                                    'pagination-item',
                                    {'pagination-item__active': (index + 1 === pageNumber)},
                                    []
                                )}
                            >
                                {
                                    index + 1
                                }
                            </button>
                        ))
                }
            </div>
            <button
                className="pagination__btn"
                onClick={onClickNext}
                disabled={pageNumber === 10}
            >
                Next
            </button>
        </div>
    );
};
