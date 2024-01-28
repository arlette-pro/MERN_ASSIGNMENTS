import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const ProductDetails = () => {
    const {id} = useParams()
    const [data, setData] = useState({});
    const {title, price, description} = data;
   useEffect(() => {
    axios.get('http://localhost:8000/api/product/'+id)
    .then((response) => {
        setData(response.data)
    })
    .catch((err) => {
        console.log(err);
    })
   }, []);
  return (
    <div>
    <h1>{title}</h1>
    <p>Price: {price}</p>
    <p>Desciption: {description} </p>
    </div>
  )
}

export default ProductDetails