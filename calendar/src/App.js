import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'components/';

import { selectors } from 'redux/selectors/';
// import MainView from './views/main/main-view';
// import AuthView from './views/auth/auth-view';
// import NotFoundView from './views/NotFoundView/NotFoundView';
// lazy import
const MainView = lazy(() => import('views/main/main-view'));
const AuthView = lazy(() => import('views/auth/auth-view'));
const NotFoundView = lazy(() => import('views/NotFoundView/NotFoundView'));

function App() {
  const { authorization, member } = useSelector(selectors.getAuthorizationData);

  return (
    <Suspense fallback={<div>Downloading...</div>}>
      <Container>
        <Switch>
          <Route path="/" exact>
            {authorization ? (
              <MainView user={member} />
            ) : (
              <Redirect to="/authorization" />
            )}
          </Route>

          <Route path="/authorization">
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
