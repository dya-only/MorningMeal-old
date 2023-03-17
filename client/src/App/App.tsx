import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'

import FirstPage from '../FirstPage/FirstPage'
import HomePage from '../HomePage/HomePage'
import LoginPage from '../LoginPage/LoginPage'
import SignupPage from '../SignupPage/SignupPage'
import SettingPage from '../SettingPage/SettingPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route path='/index' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/setting' element={<SettingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App