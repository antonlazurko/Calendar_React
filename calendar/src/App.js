import { lazy, Suspense, useState } from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from './components/container/container';

const MainView = lazy(() =>
  import('./views/main/main-view' /*webpackChunkName: "MainView" */),
);
const AuthView = lazy(() =>
  import('./views/auth/auth-view' /*webpackChunkName: "AuthView" */),
);

function App() {
  const [authUser, setAuthUser] = useState();
  return (
    <Suspense fallback={<div>Downloading...</div>}>
      <Container>
        {!authUser ? (
          <AuthView
            onSubmit={value => {
              setAuthUser(value);
            }}
          />
        ) : (
          <MainView user={authUser} />
        )}
        <ToastContainer autoClose={1800} />
      </Container>
    </Suspense>
  );
}

export default App;
