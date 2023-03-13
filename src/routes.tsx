import { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
const Login = lazy(() => import("../src/components/Login/Login"));

type CustomRouteProps = RouteProps & {
  name: string;
}

const routes: CustomRouteProps[] = [
  {
    name: 'home',
    path: '/',
    element: <Login/>,
  },
  {
    name: 'about',
    path: '/about',
    // element: <About />,
  },
  // добавьте здесь другие маршруты
  {
    name: 'not-found',
    path: '*',
    // element: <NotFound />,
  },
];

export default routes;

