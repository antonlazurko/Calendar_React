import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from './components/container/container';

import { useSelector } from 'react-redux';

import { getAuthorizationData } from './redux/selectors/selectors';

// lazy import
const MainView = lazy(() => import('./views/main/main-view'));
const AuthView = lazy(() => import('./views/auth/auth-view'));
const NotFoundView = lazy(() => import('./views/NotFoundView/NotFoundView'));

function App() {
  const { authorization, member } = useSelector(getAuthorizationData);

  return (
    <Suspense fallback={<div>Downloading...</div>}>
      <Container>
        <Switch>
          <Route path="/" exact>
            {authorization ? (
              <MainView user={member} />
            ) : (
              <Redirect to="/authorisation" />
            )}
          </Route>

          <Route path="/authorisation">
            <AuthView />
          </Route>
          <Route>
            <NotFoundView />
          </Route>
        </Switch>
        <ToastContainer autoClose={1800} />
      </Container>
    </Suspense>
  );
}

export default App;
