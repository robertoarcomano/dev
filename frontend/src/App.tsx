import { useState } from 'react'
import { Button } from '@mui/material'
import './App.css'

function App() {
  const API_URL = import.meta.env.VITE_API_URL
  const [message, setMessage] = useState('')

  const handleClick = async () => {
    const res = await fetch(API_URL)
    const data = await res.json()
    setMessage(data.message)
  }

  return (
    <>
      <Button variant="contained" onClick={handleClick}>Click</Button>
      {message && <p>{message}</p>}
    </>
  )
}

export default App
