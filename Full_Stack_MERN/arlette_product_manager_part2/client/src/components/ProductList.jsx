import axios from "axios";
import '../App.css'
import { useEffect } from "react"
import { Link } from "react-router-dom";

const ProductList = (props) => {
        // eslint-disable-next-line react/prop-types
        const {product, setProduct} = props;
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
                
            </tr>
            {
                product.map((product, index) => {
                    return (
                        <tr key={index}>
                            <td>
                            {/* <td>{person.title}</td> */}
                            <Link to={`/product/${product._id}`}>{product.title}</Link>
                            </td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                        </tr>
                    
                    )
                })
            }


        </table>
    )
}

export default ProductList;