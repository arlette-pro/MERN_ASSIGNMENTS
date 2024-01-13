import React from 'react';


function PersonCard (props) {
const {firstName, lastName, age, hairColor} = props;
    return (
        <div>
        <h2>{firstName}, {lastName}</h2>
        <p>age: {age}</p>
        <p>hair color: {hairColor}</p>
        </div>
    );
}
export default PersonCard