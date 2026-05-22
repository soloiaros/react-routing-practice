import Root from './routes/root';
import ErrorPage from './error-page';
import Contact from './routes/contacts';

const routes = [
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'contacts/:contactId',
                element: <Contact />,
            },
        ],
    },
]

export default routes;