import { Suspense, lazy, useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from './redux/auth/selectors';
import { refreshUser } from './redux/auth/operations';
import { Route, Routes } from 'react-router-dom';
import RestrictedRoute from './components/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute';
import Layout from './components/Layout';

const HomePage = lazy(() => import('./pages/HomePage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));

const App = () => {
    const dispatch = useDispatch();
    const { isRefreshing } = useSelector(selectIsRefreshing);

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return isRefreshing ? (
        <b>Refreshing user...</b>
    ) : (
        <Layout>
          <Suspense>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/register' element={<RestrictedRoute redirectTo='/contacts' component={<RegistrationPage />} />} />
                <Route path='/login' element={<RestrictedRoute redirectTo='/contacts' component={<LoginPage />} />} />
                <Route path='/contacts' element={<PrivateRoute redirectTo='/login' component={<ContactsPage />} />} />
            </Routes>
          </Suspense>
        </Layout>
    )
}

export default App;
