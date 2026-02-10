import React, { Component } from 'react'
import food from '../images/food.jfif'
import burger from '../images/burger.jfif'
import './style.css'

class ToggleImage extends Component {
    constructor(){
    super();
    this.state={
        show:true
    };
    }

     toggle=()=>{
        this.setState({
            show:!this.state.show
        })
    }
  render() {

     let imagelink;
     if(this.state.show){
        imagelink=food
     }
     else{
        imagelink=burger
     }
    return (
      <div>
        <img  src={imagelink} alt="img" className='img1'/><br></br>
        <button onClick={this.toggle} className='but1'>Toggle Image</button>
      </div>
    )
  }
}

export default ToggleImage