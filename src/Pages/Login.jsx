import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { app } from '../Firebase'

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const Login = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const LoginUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => alert("Success"))
      .catch((value) => alert("User Not Found!"))
  }
  const signUpWithGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };


  return (
    <div>
      <h1>Login Here</h1>
      <label>Enter Your Email</label>
      <input onChange={(e) => setemail(e.target.value)} value={email} type="email" required placeholder='Enter Email' />

      <label>Enter Your Password</label>
      <input onChange={(e) => setpassword(e.target.value)} value={password} type="password" required placeholder='Enter Password' />
      <button onClick={LoginUser}>Login</button>
      <br />
      <br />
      <button onClick={signUpWithGoogle}>Signin with Google</button>
    </div>

  )
}

export default Login
