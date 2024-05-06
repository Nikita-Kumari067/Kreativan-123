import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
export default function Add(){

    let[add,setAdd]=useState("")
    let[todos, setTodos]=useState([{
        task:"sample task",
        id:uuidv4(),
        isDone:false
    }])

    let handleAdd=(event)=>{
        setAdd(event.target.value)
        }
    let handleTodos=()=>{
        setTodos([...todos,{task:add, id:uuidv4()}])
        setAdd("")
    }
    let deleteTodos=(id)=>{
        setTodos(todos.filter((add)=>add.id !=id))

    }
    let markAsDone=(id)=>{
        setTodos((prevTodos)=>
        prevTodos.map((todo)=>{
            if (todo.id==id){
                return{
                    ...todo, 
                    isDone:true
                }
            }
            else{
                return todo
            }
        })
            
    )



    }

   
                
     
        
    return(
        <div>
            <h2>TO-DO-APP</h2>
            <input placeholder="Add items" type="text" value={add} onChange={handleAdd} />
            <button onClick={handleTodos}>Add item</button>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <h3>Tasks To-Do</h3>
            <ul>
           {todos.map((add)=>{
                return <li key={add.id}>
                <span style ={add.isDone? {textDecorationLine:"line-through"}:{}}>
                {" "}
                {add.task} 
                </span>

                &nbsp;
                &nbsp;
                <button onClick={()=>deleteTodos(add.id)}>Delete</button>
                <button onClick={()=>markAsDone(add.id)}>Mark As Done</button>
                </li>
                
            } )}
            
            
            </ul>

          

        </div>
    
    )
}