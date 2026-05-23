import Root from './routes/root';
import Contact from './routes/contact';
import EditContact from './routes/edit';
import ErrorPage from './error-page';
import { rootLoader, contactLoader, editLoader } from './loaders';
import { rootAction, editAction, destroyAction } from './actions';

const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: 'contacts/:contactId/edit',
        element: <EditContact />,
        loader: editLoader,
        action: editAction,
      },
      {
        path: 'contacts/:contactId/destroy',
        action: destroyAction,
      },
    ],
  },
];

export default routes;
