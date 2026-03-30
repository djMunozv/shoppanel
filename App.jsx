import { useState, useEffect } from "react"
import Login from "./pages/Login"
import Products from "./pages/Products"
import React from "react"

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const savedUser = localStorage.getItem("user")
    if (savedUser) setUser(JSON.parse(savedUser))
  }, [])

  return user ? <Products /> : <Login onLogin={setUser} />
}

export default App
