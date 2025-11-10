import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="p-4 min-vh-100 bg-light">
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow rounded-3 mb-5 justify-content-center">
          <ul className="navbar-nav flex-row">
            <li className="nav-item me-4">
              <Link
                to="/"
                className="nav-link fw-semibold text-dark p-2"
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link
                to="/login"
                className="nav-link fw-semibold text-dark p-2"
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="*"
              element={<h1 className="text-4xl text-center text-danger mt-5">404 - P&aacute;gina no encontrada</h1>}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App
