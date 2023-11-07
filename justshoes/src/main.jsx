import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Brand from './pages/Brand'
import Navbar from './components/Navbar'
import Shoe from './pages/shoe'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Shoe/>
    <Brand/>
  </React.StrictMode>,
)
