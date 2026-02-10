import React, { Component } from 'react'

class ClassComp extends Component {
  render() {
    const{fname,lname,email,contact,city}=this.props;
    return (
      <div>
        <h1>This is class component</h1>
        <p>First name : <strong>{fname}</strong></p>
        <p>Last name  : <strong>{lname}</strong></p>
        <p>Email : <strong>{email}</strong></p>
        <p>Contact number : <strong>{contact}</strong></p>
        <p>City : <strong>{city}</strong></p>
      </div>
    )
  }
}

export default ClassComp