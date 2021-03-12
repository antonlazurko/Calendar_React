import { lazy, Suspense, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from './components/container/container';

const MainView = lazy(() => import('./views/main/main-view'));
const AuthView = lazy(() => import('./views/auth/auth-view'));
const NotFoundView = lazy(() => import('./views/NotFoundView/NotFoundView'));

function App() {
  const [authUser, setAuthUser] = useState();
  return (
    <Suspense fallback={<div>Downloading...</div>}>
      <Container>
        <Switch>
          <Route path="/" exact>
            {authUser ? (
              <MainView user={authUser} />
            ) : (
              <Redirect to="/authorisation" />
            )}
          </Route>

          <Route path="/authorisation">
            {!authUser ? (
              <AuthView
                onSubmit={value => {
                  setAuthUser(value);
                }}
              />
            ) : (
              <Redirect to="/" />
            )}
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
