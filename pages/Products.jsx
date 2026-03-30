import React from "react"
import { useEffect, useState } from "react"

function Products() {
  const [products, setProducts] = useState([])
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products))

    const savedOrders = localStorage.getItem("orders")
    if (savedOrders) setOrders(JSON.parse(savedOrders))
  }, [])

  const addOrder = (product) => {
    const newOrder = { ...product, status: "pendiente" }

    const updated = [...orders, newOrder]
    setOrders(updated)
    localStorage.setItem("orders", JSON.stringify(updated))
  }

  const updateStatus = (id, newStatus) => {
    const updated = orders.map(o =>
      o.id === id ? { ...o, status: newStatus } : o
    )

    setOrders(updated)
    localStorage.setItem("orders", JSON.stringify(updated))
  }

  const logout = () => {
    localStorage.removeItem("user")
    window.location.reload()
  }

  return (
    <div className="container mt-4">

      {/* 🔒 BOTÓN LOGOUT */}
      <button className="btn btn-danger mb-3" onClick={logout}>
        Cerrar sesión
      </button>

      <h2>Productos</h2>

      <div className="row">
        {products.map(p => (
          <div className="col-md-4" key={p.id}>
            <div className="card mb-3 shadow">
              <img
                src={p.thumbnail}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5>{p.title}</h5>
                <p>${p.price}</p>

                <button
                  className="btn btn-success w-100"
                  onClick={() => addOrder(p)}
                >
                  Pedir
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr />

      <h2>Mis pedidos</h2>

      {orders.map(o => (
        <div key={o.id} className="card mb-2 p-3 shadow-sm">
          <h5>{o.title}</h5>
          <p><strong>Estado:</strong> {o.status}</p>

          <button
            className="btn btn-danger me-2"
            onClick={() => updateStatus(o.id, "cancelado")}
          >
            Cancelar
          </button>

          <button
            className="btn btn-warning"
            onClick={() => updateStatus(o.id, "reagendado")}
          >
            Reagendar
          </button>
        </div>
      ))}

    </div>
  )
}

export default Products
