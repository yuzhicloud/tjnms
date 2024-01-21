import React from 'react';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import LoginRedirect from 'app/modules/login/login-redirect';
import Logout from 'app/modules/login/logout';
import Home from 'app/modules/home/home';
import EntitiesRoutes from 'app/entities/routes';
import PrivateRoute from 'app/shared/auth/private-route';
import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';
import PageNotFound from 'app/shared/error/page-not-found';
import { AUTHORITIES } from 'app/config/constants';
import PreLogin from 'app/modules/login/pre-login';
import { useAppSelector } from 'app/config/store';
const loading = <div>loading ...</div>;

const HomeOrPreLogin = () => {
  const isAuthenticated = useAppSelector(state => state.authentication.isAuthenticated); // 假设的认证状态选择器
  return isAuthenticated ? <Home /> : <PreLogin />;
};

const Admin = Loadable({
  loader: () => import(/* webpackChunkName: "administration" */ 'app/modules/administration'),
  loading: () => loading,
});
const AppRoutes = () => {
  return (
    <div>
      <div></div>
      <div className="view-routes">
        <ErrorBoundaryRoutes>
          <Route index element={<HomeOrPreLogin />} />
          <Route path="logout" element={<Logout />} />
          <Route
            path="admin/*"
            element={
              <PrivateRoute hasAnyAuthorities={[AUTHORITIES.ADMIN]}>
                <Admin />
              </PrivateRoute>
            }
          />
          <Route path="oauth2/authorization/oidc" element={<LoginRedirect />} />
          <Route
            path="*"
            element={
              <PrivateRoute hasAnyAuthorities={[AUTHORITIES.USER]}>
                <EntitiesRoutes />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </ErrorBoundaryRoutes>
      </div>
    </div>
  );
};

export default AppRoutes;
