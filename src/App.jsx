import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyARScene from './BasicAr'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MyARScene />
    </>
  )
}

export default App
