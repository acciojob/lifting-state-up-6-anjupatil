import React,{useState} from "react";
import Child from "./Child";

const Parent=()=>{

    //Parent has state of todos
    const [todos,setTodos]=useState([
        {id:1,text:"Learn React",completed:false},
        {id:2,text:"Build a React app",completed:false},
        {id:3,text:"Deploy the React app",completed:false},
    ]);

    const completeTodo=(id)=>{
        const updatedTodods=todos.map(todo=>{
            if(todo.id==id){
                return {...todo,completed:!todo.completed};
            }
            return todo;
        });
        setTodos(updatedTodods);
    }

    return(
        <div>
            <h1>Parent Component</h1>
            <Child todos={todos} completeTodo={completeTodo}></Child>
        </div>
    )

}

export default Parent;