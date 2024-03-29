import { useState } from "react";
import ProductForm from "../components/ProductForm"
import ProductList from "../components/ProductList"

const Main = () => {
    const [product, setProduct] = useState([]);
    return (
        <div>
            <ProductForm product = {product} setProduct = {setProduct} />
            <ProductList product = {product} setProduct = {setProduct} />
        </div>
    )
}

export default Main