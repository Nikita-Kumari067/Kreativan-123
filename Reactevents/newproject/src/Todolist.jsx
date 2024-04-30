import { useState } from "react"



export default function Todolist(){
    let[todo, setTodo]=useState(["Sample task"])
    let[newTodo, setNewTodo]=useState("")


    let addNewTodo=()=>{
        

    }  

   
    
    
    return(
        <div>
            <h4>To Do List</h4>
            <input placeholder="Add task" value={newTodo} ></input>
            <button>Add</button>
            <br></br>
            <br></br>
            <br></br>

            <h4>Tasks Todo</h4>
            <ul>
                {todo.map((todo)=>(
                    <li>{todo}</li>

                ))}
            </ul>
        </div>
    )
}