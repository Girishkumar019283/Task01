import React, { Component } from 'react'
import ConstImg from './ConstantImg'
import './style.css'

class ChangeImage extends Component {
  constructor(){
    super();
    this.state={
        show:ConstImg.food
    };
    }

     food1=()=>{
        this.setState({
            show:ConstImg.food1
            
        })
    }
    burger=()=>{
        this.setState({
            show:ConstImg.burger
            
        })
    }
    food=()=>{
        this.setState({
            show:ConstImg.food
            
        })
    }
  

  render() {

    
    return (
      <div>
        <img  src={this.state.show} alt="img" className='img1'/><br></br>

        <button onClick={this.food1} className='but1'>food1</button>
        <button onClick={this.burger} className='but1'>burger</button>
        <button onClick={this.food} className='but1'>food</button>
        
      </div>
    )
  }
}

export default ChangeImage