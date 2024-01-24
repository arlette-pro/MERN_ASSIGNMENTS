import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorBoxForm from './components/ColorBoxForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ColorBoxForm/>
    </div>
  )
}

export default App
