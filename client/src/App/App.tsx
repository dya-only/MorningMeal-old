import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'

import FirstPage from '../FirstPage/FirstPage'
import SignupPage from '../SignupPage/SignupPage'
import SignupSetPage from '../SignupSetPage/SignupSetPage'
import HomePage from '../HomePage/HomePage'
import LoginPage from '../LoginPage/LoginPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/signup/set' element={<SignupSetPage />} />
        <Route path='/index' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App