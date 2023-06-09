import React from 'react'
import { getDatabase, ref, set } from "firebase/database"
import { app } from "./Firebase"

const db = getDatabase(app)

const App = () => {

  const PutData = () => {
    set(ref(db, "users/priya"), {
      id: 1,
      Name: "Priya",
      Age: 20
    })
  }

  return (
    <div className='App'>
      <h1>My Firebase App</h1>
      <button onClick={PutData}>Put Data</button>
    </div>
  )
}

export default App