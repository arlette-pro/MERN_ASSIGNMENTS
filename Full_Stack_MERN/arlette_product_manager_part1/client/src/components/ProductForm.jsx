import axios from 'axios';
import React, { useEffect, useState } from 'react'


const ProductForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const createProductHandler = (e)  => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title: title, price: price, description
        })
        .then((res) => console.log(res))
        .catch(err => console.log(err))
    }
  return (
  <form onSubmit={createProductHandler}>
    <div>
        <label htmlFor="">Title </label>
        <input type="text"  onChange = {(e) => setTitle(e.target.value)}/>
    </div><br />
    <div>
        <label htmlFor="">Price </label>
        <input type="number" onChange = {(e) => setPrice(e.target.value)} />
    </div><br />
    <div>
        <label htmlFor="">Description </label>
        <textarea type="text" rows={4} cols={30} onChange = {(e) => setDescription(e.target.value)}/>
   </div><br />

   <input type="submit" value="create product" /><br /><br />

  </form>

  
  )
}


export default ProductForm