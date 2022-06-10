import React, { Component } from 'react'

 class Forms extends Component {
     state={
         firstName:'',
     }
     onHandleChange=(event)=>{
         this.setState({
             [event.target.name]:event.target.value
         })
     }
     onSubmit=()=>{
         console.log(this.state);
     }
  render() {
    return (
      <form>
          Forms
          <input name='firstName' type="text" onChange={this.onHandleChange} />
          <input name='lastName' type="text" onChange={this.onHandleChange} />
          <button type='button' onClick={this.onSubmit}>Click</button>
      </form>
    )
  }
}
export default Forms
