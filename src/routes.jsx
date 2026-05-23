import Root, { loader as rootLoader, action as rootAction } from './routes/root';
import ErrorPage from './error-page';
import Contact, { loader as contactLoader } from './routes/contact';
import EditContact, { loader as editContactLoader, action as editAction } from './routes/edit'

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
                loader: editContactLoader,
                action: editAction,
            },
        ],
    },
]

export default routes;