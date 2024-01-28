import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './views/Main'
import ProductDetails from './components/ProductDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
          <Route element={ <Main />}  path='/product' default />
          <Route element={ <ProductDetails />}  path='/product/:id' />
      </Routes>
    </div>
  )
}

export default App
