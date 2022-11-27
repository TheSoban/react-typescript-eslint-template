import { createBrowserRouter } from 'react-router-dom';
import { Home, About } from '@/pages';
import { Root, RootBoundary } from '@/routes/Root';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <RootBoundary />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);
