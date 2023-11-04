import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Brand from './pages/Brand'
import Navbar from './components/Navbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Brand/>
  </React.StrictMode>,
)
