import { lazy, useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from './redux/auth/selectors';
import { refreshUser } from './redux/auth/operations';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { RestrictedRoute } from './components/RestrictedRoute';

const HomePage = lazy(() => import('./pages/HomePage'));
const ContactPage = lazy(() => import('./pages/ContactsPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));

function App() {
    const dispatch = useDispatch();
    const { isRefreshing } = useSelector(selectIsRefreshing);

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return isRefreshing ? (
        <b>Refreshing user...</b>
    ) : (
        <Layout>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/register' element={<RestrictedRoute redirectTo='/contacts' component={<RegistrationPage />} />} />
                <Route path='/login' element={<RestrictedRoute redirectTo='/contacts' component={<LoginPage />} />} />
                <Route path='/contacts' element={<RestrictedRoute redirectTo='/login' component={<ContactPage />} />} />
            </Routes>
        </Layout>
    )
}

export default App
