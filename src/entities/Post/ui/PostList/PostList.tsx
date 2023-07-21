import {Table} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";
import {Skeleton} from "shared/ui/Skeleton/Skeleton";
import {SortOrder} from "shared/const/SortOrder";
import {classNames} from "shared/lib/classNames/classNames";
import {Post, PostSortField} from "../../model/types/post";
import './PostList.css';

interface PostListProps {
    posts: Post[];
    isLoading: boolean;
    sort?: PostSortField;
    order?: SortOrder;
    onSortChange?: (sort: PostSortField, order: SortOrder) => void;
}


export const PostList = (props: PostListProps) => {
    const {
        posts,
        isLoading,
        sort,
        order,
        onSortChange
    } = props;

    const renderSortIcon = (sortField: PostSortField) => {
        const isSortActive = sortField === sort;
        const isAscActive = isSortActive && order === 'asc';
        const isDescActive = isSortActive && order === 'desc';

        return (
            <div className="sort-icons">
                <FontAwesomeIcon
                    className={classNames("sort-icon", {"sort-icon__active": isAscActive}, [])}
                    onClick={() => onSortChange?.(sortField, 'asc')}
                    icon={faCaretUp}
                />
                <FontAwesomeIcon
                    className={classNames("sort-icon", {"sort-icon__active": isDescActive}, [])}
                    onClick={() => onSortChange?.(sortField, 'desc')}
                    icon={faCaretDown}
                />
            </div>
        )
    }

    if (isLoading) {
        return (
            <Table bordered hover responsive>
                <tbody>
                {
                    new Array(10)
                        .fill(0)
                        .map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <Skeleton width={50} height={30} border={'4px'}/>
                                </td>
                                <td>
                                    <Skeleton width={400} height={30} border={'4px'}/>
                                </td>
                                <td>
                                    <Skeleton width={400} height={30} border={'4px'}/>
                                </td>
                            </tr>
                        ))
                }
                </tbody>
            </Table>
        )
    }

    if (posts.length === 0) {
        return (
            <h1>No data</h1>
        )
    }


    return (
        <Table bordered hover responsive>
            <thead>
                <tr>
                    <th className="table__th">
                        <div className="table__header">
                            ID {renderSortIcon(PostSortField.ID)}
                        </div>
                    </th>
                    <th className="table__th">
                        <div className="table__header">
                            Title {renderSortIcon(PostSortField.TITLE)}
                        </div>
                    </th>
                    <th className="table__th">
                        <div className="table__header">
                            Description {renderSortIcon(PostSortField.DESCRIPTION)}
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    posts.map((post) => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    );
};
