import { FC } from 'react';
import { Outlet, useRouteError } from 'react-router-dom';
import { Layout } from '@/layout';

export const Root: FC = () => (
  <Layout>
    <Outlet />
  </Layout>
);

export const RootBoundary: FC = () => {
  const error = useRouteError();
  return <pre>{JSON.stringify(error)}</pre>;
};
