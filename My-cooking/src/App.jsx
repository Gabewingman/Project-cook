import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
