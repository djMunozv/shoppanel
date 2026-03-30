/*import { useState } from "react"
import React from "react"

function Login({ onLogin }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()

    const res = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({
  username: username,
  password: password,
  expiresInMins: 30
})  
    })

    const data = await res.json()

    if (data.id) {
      localStorage.setItem("user", JSON.stringify(data))
      onLogin(data)
    } else {
      alert("Credenciales incorrectas")
    }
  }

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input className="form-control mb-2" placeholder="Usuario" onChange={e => setUsername(e.target.value)} />
        <input type="password" className="form-control mb-2" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />
        <button className="btn btn-primary">Ingresar</button>
      </form>
    </div>
  )
}

export default Login*/
import React from "react"
import { useState } from "react"

function Login({ onLogin }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e) => {
    e.preventDefault()

    // 🔐 LOGIN SIMULADO
    if (username === "admin" && password === "1234") {
      const user = { username }
      localStorage.setItem("user", JSON.stringify(user))
      onLogin(user)
    } else {
      alert("Credenciales incorrectas")
    }
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">ShopPanel</h1>

      <div className="col-md-4 mx-auto">
        <h3>Login</h3>

        <form onSubmit={handleLogin}>
          <input
            className="form-control mb-2"
            placeholder="Usuario"
            onChange={e => setUsername(e.target.value)}
          />

          <input
            type="password"
            className="form-control mb-2"
            placeholder="Contraseña"
            onChange={e => setPassword(e.target.value)}
          />

          <button className="btn btn-primary w-100">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
