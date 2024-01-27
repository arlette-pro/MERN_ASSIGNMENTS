import { useState } from 'react'
import './App.css'
import ProductForm from './components/ProductForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Product Manager</h1>
      <ProductForm/>
    </div>
  )
  
}

export default App
