import React, {useState} from 'react'

const HookForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPassword };
        console.log("welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

    };
  return (
<div className='data'>
    <form onSubmit={ createUser }>
        <div>
            <label htmlFor="firstName">firstName: </label>
            <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="lastName">lastName: </label>
            <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="email">Email: </label>
            <input type="text" value={email}  onChange={ (e) => setEmail(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="password">Password: </label>
            <input type="text" value={password} onChange={ (e) => setPassword(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="confirmPassword">ConfirmPassword: </label>
            <input type="text" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value)}/>
        </div>
        <p className='p-form'>your form Data</p>

        <p>First Name : {firstName}</p>
        <p>Last Name : {lastName}</p>
        <p>Email : {email}</p>
        <p>Password : {password}</p>
        <p>Confirm Password : {confirmPassword}</p>
    </form>
</div>
  )
}

export default HookForm;