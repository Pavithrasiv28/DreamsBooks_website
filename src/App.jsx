import { useState } from 'react'
import HomeComponent from './Pages/Home/home.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomeComponent/>
    </>
  )
}

export default App
