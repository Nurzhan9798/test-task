import React, {useCallback} from 'react';
import {Route, Routes} from 'react-router-dom';
import {AppRoutesProps, routeConfig} from 'shared/config/routre/routeConfig';

export function AppRoute() {
    const renderRoute = useCallback((route: AppRoutesProps) => {
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.element}
            />
        );
    }, []);
    return (
        <Routes>
            {Object.values(routeConfig).map(renderRoute)}
        </Routes>
    );
}
