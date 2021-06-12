import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from '../../feature/landing-page/landing-page';
import WebLayout from '../layout/web-layout/web-layout';
import './app-routes.module.scss';

/* eslint-disable-next-line */
export interface AppRoutesProps {}
const GuestRoute = ({ component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => <WebLayout>{component}</WebLayout>}
    ></Route>
  );
};
export function AppRoutes(props: AppRoutesProps) {
  return (
    <div>
     <GuestRoute path="/" component={<LandingPage/>} />
    </div>
  );
}

export default AppRoutes;
