import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import './utils/style/_global.scss'
import Header from './components/header'
import Home from './pages/Home'
import Error from './pages/Error'
import User from './pages/User'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/user" element={<User />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
