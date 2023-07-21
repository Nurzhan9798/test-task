export interface Post {
    id: number;
    title: string;
    body: string;
}

export enum PostSortField {
    ID = 'id',
    TITLE = 'title',
    DESCRIPTION = 'description',
}
