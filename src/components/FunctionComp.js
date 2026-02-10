import React from 'react'

const FunctionComp = (props) => {
       const{fname,lname,email,contact,city}=props;
  return (
    <div>
        <h1>This is function component</h1>
        <p>First name : <strong>{fname}</strong></p>
        <p>Last name  : <strong>{lname}</strong></p>
        <p>Email : <strong>{email}</strong></p>
        <p>Contact number : <strong>{contact}</strong></p>
        <p>City : <strong>{city}</strong></p>
    </div>
  )
}

export default FunctionComp