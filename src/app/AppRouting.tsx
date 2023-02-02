import { RouteComponentProps, Router } from '@reach/router';
import React, { Suspense } from 'react';
import HomePage from '../pages/HomePage';
import PageLoading from '../shared/ui/PageLoading';

const Home = (props: RouteComponentProps) => <HomePage />;
const AsyncFunPage = React.lazy<React.FC<RouteComponentProps>>(() => import('../pages/FunPage'));

export default function AppRouting() {
  return (
    <Suspense fallback={<PageLoading />}>
      <Router>
        <Home path="/" />
        <AsyncFunPage path="fun/*" />
      </Router>
    </Suspense>
  );
}
