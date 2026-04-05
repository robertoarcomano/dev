import { useState } from 'react'
import { Button } from '@mui/material'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  const handleClick = async () => {
    const res = await fetch('${API_URL}/')
    const data = await res.json()
    setMessage(data.message)
  }

  return (
    <>
      <Button variant="contained" onClick={handleClick}>Click</Button>
      Test: {message && <p>{message}</p>}
    </>
  )
}

export default App
