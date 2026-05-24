import Root from './routes/root';
import Contact from './routes/contact';
import EditContact from './routes/edit';
import ErrorPage from './error-page';
import Index from './routes/index';
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
        index: true,
        element: <Index />
      },
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
        errorElement: <div>Oops! We couldn't delete the user for some reason.</div>
      },
    ],
  },
];

export default routes;
