import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from './components/container';
import MainView from './views/main-view';
import AuthView from './views/auth-view';

const UNAUTHORISED = 'unauthorised';
const AUTHORISED_USER = 'autorised_user';
const AUTHORISED_ADMIN = 'autorised_admin';

function App() {
  const [authStatus, setAuthStatus] = useState(UNAUTHORISED);
  const handleAuthSubmit = value => {
    if (value) {
      setAuthStatus(AUTHORISED_ADMIN);
      return;
    } else {
      setAuthStatus(AUTHORISED_USER);
    }
  };
  return (
    <Container>
      {authStatus === UNAUTHORISED && <AuthView onSubmit={handleAuthSubmit} />}
      {authStatus === AUTHORISED_USER && <MainView isAdmin={false} />}
      {authStatus === AUTHORISED_ADMIN && <MainView isAdmin={true} />}
      <ToastContainer autoClose={1800} />
    </Container>
  );
}

export default App;