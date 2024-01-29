import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const { id } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
        .then((response) => {
           setTitle(response.data.title)
           setPrice(response.data.price)
           setDescription(response.data.description)
        })
        .catch((err) => {
            console.log(err);
        })

    }, [id]);

    const UpdateProduct =(e) =>{
        e.preventDefault()
        axios.patch('http://localhost:8000/api/product/edit/' + id, {
            title: title,
            price:price,
            description:description
        })
        .then((res) =>{
            console.log(res);
            navigate('/product')
        })
        .catch((err) =>{
            console.log(err);
        })
    }

    return (
        <form onSubmit={UpdateProduct}>
        <div>
            <label htmlFor="">Title </label>
            <input type="text"  onChange = {(e) => setTitle(e.target.value)} value={title}/>
        </div><br />
        <div>
            <label htmlFor="">Price </label>
            <input type="number" onChange = {(e) => setPrice(e.target.value)} value={price} />
        </div><br />
        <div>
            <label htmlFor="">Description </label>
            <textarea type="text" rows={4} cols={30} onChange = {(e) => setDescription(e.target.value)} value={description}/>
       </div><br />
    
       <input type="submit" value="Create product" /><br /><br />
    
      </form>
    )
}

export default UpdateProduct
