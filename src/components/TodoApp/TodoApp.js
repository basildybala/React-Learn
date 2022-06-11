import React, { Component } from 'react'
import "./TodoApp.css"



 class TodoApp extends Component {

    state={
        input:"",
        items:[]
    }
    handleChange=(event)=>{
        this.setState({
            input:event.target.value
        })
    }
    storeItems=(event)=>{
        event.preventDefault();
        const {input}=this.state
        this.setState({
            items:[...this.state.items,input],
            input:""
        })
    }
    delete=(index)=>{
      this.setState({
          items:this.state.items.filter((data, key)=> key !==index)
      })
    }

  render() {
      const {input,items}=this.state
      console.log(items);
    return (
      <div className='todo-container'>
          <form onSubmit={this.storeItems}>
           <h1>TodoApp </h1> 
           
               <input value={input} onChange={this.handleChange} type="text" />
           
           </form>

           <ul>
               {items.map((data, index) =>(
                   <li key={index}>{data} <i onClick={()=>this.delete(index)}>X</i></li>
               ))}
           </ul>
      </div>

     
    )
  }
}
export default TodoApp