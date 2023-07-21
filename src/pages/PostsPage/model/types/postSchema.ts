import {Post, PostSortField} from "entities/Post";
import {SortOrder} from "shared/const/SortOrder";

export interface PostSchema {
    data: Post[];
    isLoading: boolean;
    error?: string;
    pageNumber: number;
    limit: number;
    // sort: ArticleSortField;
    // order: SortOrder;
    search: string;
    order: SortOrder;
    sort: PostSortField;

}
