import { useState } from 'react'
import { Button } from '@mui/material'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  const handleClick = async () => {
    const res = await fetch('http://localhost:3200/')
    const data = await res.json()
    setMessage(data.message)
  }

  return (
    <>
      <Button variant="contained" onClick={handleClick}>Click</Button>
      {message && <p>{message}</p>}
      ok?
    </>
  )
}

export default App
