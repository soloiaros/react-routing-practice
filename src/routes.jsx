import App from "./App";
import Profile from "./components/Profile";
import ErrorPage from "./components/ErrorPage";

export default routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: 'profile/:name',
    element: <Profile />,
  },
];