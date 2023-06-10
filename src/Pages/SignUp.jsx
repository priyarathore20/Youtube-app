import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from '../Firebase'

const auth = getAuth(app)

const SignUp = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const SignUpUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((value) => alert("Success"))
  }

  return (
    <div>
      <h1>Sign Up Here</h1>
      <label>Enter Your Email</label>
      <input onChange={(e) => setemail(e.target.value)} value={email} type="email" required placeholder='Enter Email' />

      <label>Enter Your Password</label>
      <input onChange={(e) => setpassword(e.target.value)} value={password} type="password" required placeholder='Enter Password' />
      <button onClick={SignUpUser}>Sign Up</button>
    </div>

  )
}

export default SignUp
