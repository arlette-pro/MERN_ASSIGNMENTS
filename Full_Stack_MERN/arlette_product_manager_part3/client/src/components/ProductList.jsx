import axios from "axios";
import '../App.css'
import { useEffect } from "react"
import { Link } from "react-router-dom";

const ProductList = (props) => {
        // eslint-disable-next-line react/prop-types
     const {product, setProduct, removeFromDom} = props;

     const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
        .then((response) => setProduct(response.data))
        .catch((err) => console.log(err));
    }, []);
    return (
        <table>
            <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Description</th>
                <th>Update Product</th>
                <th>Delete Product</th>
                
            </tr>
            {
                product.map((product, index) => {
                    return (
                        <tr key={index}>
                            <td>
                            <Link to={`/product/${product._id}`}>{product.title}</Link>
                            </td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td>
                            <Link to={`/product/edit/${product._id}`}>Edit</Link>
                            </td>
                            <td> 
                            <button onClick={(e)=>{deleteProduct(person._id)}}>
                             Delete
                             </button>
                            </td>

                        </tr>
                    
                    )
                })
            }


        </table>
    )
}

export default ProductList;