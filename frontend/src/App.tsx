import { useState } from 'react'
import { Button } from '@mui/material'
import './App.css'

function App() {
  const API_URL = import.meta.env.VITE_API_URL
  const API1_URL = import.meta.env.VITE_API1_URL
  const [message, setMessage] = useState('')
  const [message1, setMessage1] = useState('')

  const handleClick = async () => {
    const res = await fetch(API_URL)
    const data = await res.json()
    setMessage(data.message)

    const res1 = await fetch(API1_URL)
    const data1 = await res1.json()
    setMessage1(data1.message)
  }

  return (
    <>
      <Button variant="contained" onClick={handleClick}>Click</Button>
      {message && <p>message: {message} / message1: {message1}</p>}
    </>
  )
}

export default App
