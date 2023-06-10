import React, { useState, useEffect } from 'react';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { getAuth } from 'firebase/auth';

const auth = getAuth();

const App = () => {
  const [User, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else setUser(null);
    });
  }, []);

  if (User === null) {
    return (
      <div className="App">
        <SignUp />
        <Login />
      </div>
    );
  }
  return (
    <div>
      <h1>Hello {User.email}</h1>
      <button onClick={() => signOut(auth)}>Sign Out</button>
    </div>
  );
};
export default App;
