
import React, { Component } from 'react';
export default class Showbutton extends Component {
     name = this.props.passName
    state = {
      switchButton: false
    }
   
     handleClick() {
      
       if(this.state.switchButton){
        this.setState({switchButton: false})
        this.name = "Hii";
       }else{
        this.setState({switchButton: true})
        this.name = "Hello";
       }
       
         }
   
     
     render() {
   
       return (
         <div>
         <button onClick={()=> this.handleClick()}>
         {this.state.switchButton ? "on" : "off"}
         </button>
         <h1>Hello! I'll calculate your marks!😎 {this.name}</h1>
         </div>
       );
     }
   }