import React, {useState} from 'react';


function Person (props) {
    const [age, setAge] = useState(props.initialAge)
const {firstName, lastName,hairColor} = props;
    return (
        <div>
        <h2>{firstName}, {lastName}</h2>
        <p>age: {age}</p>
        <p>hair color: {hairColor}</p>
        <button onClick={ (event) => setAge(age + 1)}>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    );
}
export default Person