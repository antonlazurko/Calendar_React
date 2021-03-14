import { lazy, Suspense, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from './components/container/container';
import { userContext } from './userContext';

// lazy import
const MainView = lazy(() => import('./views/main/main-view'));
const AuthView = lazy(() => import('./views/auth/auth-view'));
const NotFoundView = lazy(() => import('./views/NotFoundView/NotFoundView'));

function App() {
  // initialisation user state
  const [authUser, setAuthUser] = useState();

  // initialisation getting user context
  const getUser = value => setAuthUser(value);

  return (
    <Suspense fallback={<div>Downloading...</div>}>
      <userContext.Provider value={{ getUser }}>
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
              <AuthView />
            </Route>
            <Route>
              <NotFoundView />
            </Route>
          </Switch>
          <ToastContainer autoClose={1800} />
        </Container>
      </userContext.Provider>
    </Suspense>
  );
}

export default App;
