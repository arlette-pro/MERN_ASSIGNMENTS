import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './views/Main'
import ProductDetails from './components/ProductDetails'
import UpdateProduct from './components/UpdatePerson'

function App() {
  return (
    <div>
      <Routes>
          <Route element={ <Main />}  path='/product' default />
          <Route element={ <ProductDetails />}  path='/product/:id' />
          <Route element={ <UpdateProduct />}  path='/product/edit/:id' />
      </Routes>
    </div>
  )
}

export default App
