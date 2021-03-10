import { useEffect, useState } from 'react';
import './App.css';
import Container from './components/container';
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

  useEffect(() => {
    console.log(authStatus);
  }, [authStatus]);
  return (
    <Container>
      {authStatus === UNAUTHORISED && <AuthView onSubmit={handleAuthSubmit} />}
    </Container>
  );
}

export default App;
