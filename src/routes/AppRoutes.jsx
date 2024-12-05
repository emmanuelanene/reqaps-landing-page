import React from 'react'
import routeConstants from '../constants/routeConstants';
import HomeScreen from '../screens/Home/HomeScreen';
import PageNotFound from '../screens/PageNotFound/PageNotFound';
import { Route, Routes } from 'react-router-dom';
import LayoutContainer from '../layout/LayoutContainer';

function AppRoutes() {
  return (
    <Routes>
        <Route path={routeConstants.ROOT} element={<LayoutContainer />}>
            <Route 
                path={routeConstants.HOME}
                element = {<HomeScreen />}
            />
        </Route>    

        <Route 
            path={routeConstants.PAGE_NOT_FOUND}
            element={<PageNotFound />}
        />
    </Routes>
  )
}

export default AppRoutes