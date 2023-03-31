import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import './utils/style/_global.scss'
import Header from './components/header'
import Home from './pages/Home'
import Error from './pages/Error'
import User from './pages/User'
import createFakeApi from './_mock_/mockedServer'

if (process.env.REACT_APP_ENVIRONMENT === 'developement') {
  createFakeApi()
  console.log(
    'MOCK environnement : using mocked API with Mirage and mocked datas '
  )
} else {
  console.log('API environnement : using backend API and datas ')
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/user/:id" element={<User />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
