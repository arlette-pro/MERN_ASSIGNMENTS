import React from 'react'
import { useParams } from 'react-router-dom';

const ComponentParam = () => {
    const {word,color, bgColor } = useParams();
return (
  <div>
  {
    isNaN(word) ? <h1 style={color ? {color: color, backgroundColor: bgColor} : null}>the Word is: {word}</h1> : <h1>the number is: {word}</h1>
  }
  </div>

)
}
export default ComponentParam;