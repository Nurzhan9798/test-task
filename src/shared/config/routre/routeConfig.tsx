import { RouteProps } from 'react-router-dom';
import {PostsPage} from "pages/PostsPage";
import {NotFoundPage} from "pages/NotFoundPage";

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}
enum AppRoutes {
    POSTS = 'posts',
    ARTICLES = 'articles',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.POSTS]: '/',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.POSTS]: {
        path: RoutePath.posts,
        element: <PostsPage/>
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath.articles,
        element: <PostsPage/>
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
