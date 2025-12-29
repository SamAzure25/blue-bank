import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login.jsx';
import Register from './components/register.jsx';
import Home from './pages/home.jsx';
import './index.css';
import Dashboard from './Dashboard.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Default page (loads first) */}
        <Route path="/" element={<Dashboard />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />

        {/* Catch-all: redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )


}

export default App
