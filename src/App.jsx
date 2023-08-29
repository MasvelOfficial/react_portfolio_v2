import React, { useState } from 'react'
import Nav from './components/nav/Nav'
import Photo from './components/photo/Photo'
import MainContent from './components/mainContent/MainContent'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  const [loading, setLoading] = useState(false)

  const handleMenuItemClick = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 1000)
  }

  return (
    <BrowserRouter>
      <div className="page-wrapper">
        <Nav onMenuItemClick={handleMenuItemClick} />
        <Photo />
        <MainContent loading={loading} />
      </div>
    </BrowserRouter>
  )
}

export default App