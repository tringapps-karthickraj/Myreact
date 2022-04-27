import './Displaycomponent.css';
import React, { Component } from 'react';
export default class Displaycomponent extends Component {
    isactive =false;
     arrays = this.props.array;
     constructor(props) {
        super(props);
        this.state = {
            arrays:this.props.array
        };
      }
     handleClick(name) {
        name.isActive = !name.isActive
         this.setState((state)=>{
          //  !state.arrays.find(e=>e.name === name.name).isActive;
            return {arrays:state.arrays}
         })
        
      }
      render() {
    return(<div>{this.state.arrays.map((name,index)=>
            <div key={index}><button  onClick={() =>this.handleClick(name)}>
            Details about {name.name}
        </button>
        {name.isActive ? <div>
            <div>{name.age}</div>
            <div>{name.qualification}</div>
        </div> : <div></div>}
        </div>)}
        </div>);
}
}