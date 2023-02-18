import React from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='wrap'>
      <Outlet />

    </div>
  )
}

export default App