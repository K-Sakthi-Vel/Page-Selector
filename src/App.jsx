import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PageSelector from './components/PageSelector'

function App() {
  const [count, setCount] = useState(0)

  return (
    <PageSelector/>
  )
}

export default App
