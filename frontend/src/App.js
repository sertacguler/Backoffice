import React from 'react';
import LoginPage from './pages/auth/LoginPage.js';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './reduxToolkit/authSlice';

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
};

if (!isLoggedIn) {
    return <LoginPage />;
}

  return (
    <div style={{ padding: 20 }}>
      asdasd
      <hr/>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default App;
