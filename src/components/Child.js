import React,{useState} from "react";

const Child=({todos,completeTodo})=>{
    return(
        <div>
            <h2>Child Component</h2>
        <ul>
            {todos.map(todo=>(
                <li key={todo.id}>
                    {todo.text}
                    {!todo.completed && 
                    (<button onClick={()=>completeTodo(todo.id)}>Complete</button>)}

                </li>
            ))}
        </ul>
        </div>
    )
}

export default Child;