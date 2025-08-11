import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Inventario from './pages/Inventario'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/inventario" element={<Inventario />} />
    </Routes>
  )
}

export default App