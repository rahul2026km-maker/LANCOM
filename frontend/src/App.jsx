import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
 import { ToastContainer } from 'react-toastify';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Outlet />
      <ToastContainer/>
    </>
  )
}

export default App
