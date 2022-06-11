import React, { useState } from 'react'
import "./TodoApp.css"

const TodoApp=()=>{

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")

    return(
        <div>
            <input type="text" name="name" value={name} onChange={(event)=> setName(event.target.value)} />
            <input type="text" name="email" value={email} onChange={(event)=> setEmail(event.target.value)} />
        </div>
    )

}


export default TodoApp