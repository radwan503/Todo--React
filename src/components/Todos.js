import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'



const Todos = () => {

    const [todoText, setTodoText] = useState("");
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "do you debug",
            isCompleted: false
        },
        {
            id: 2,
            text: "did you complete your home work",
            isCompleted: false
        },
        {
            id: 3,
            text: "React project done",
            isCompleted: true
        }

    ])

    const changeTodoText = (e) => {
        setTodoText(e.target.value);
    }

    const AddTodo=()=>{
        const newTodo={
            id:uuidv4(),
            text:todoText,
            isCompleted:false
        };
        setTodos([newTodo,...todos]);
        setTodoText("");
     
    }

    const completeTodo=id=>{
      const updatedTodos= todos.map(todo=>{
          if(todo.id==id){
              todo.isCompleted=true
              return todo;
          }
          else{
              return todo;
          }
      });
      setTodos(updatedTodos);
    }

    const deleteTodo= id =>{
       const updatedTodos=todos.filter(todo =>todo.id != id);
       setTodos(updatedTodos);
       console.log(updatedTodos);

       
    }
  

    return (
        <div className="card shadow">
            <div className="card-header">
                <div className="input-group">
                    <input type="text" className="form-control"
                        placeholder="Enter your todo"
                        value={todoText} 
                        onChange={(e)=>changeTodoText(e)}/>
                    <div className="input-group-append">
                        <button className="btn btn-primary" onClick={AddTodo}>Add</button>
                    </div>
                </div>
            </div>

            <div className="card-body">
                <ul className="list-group">
                    {
                        todos.map(todo => {
                            return (
                                <li className="list-group-item d-flex justify-content-between" key={todo.id}>
                                    <div>
                                    <input type="checkbox" className="mr-2" checked={todo.isCompleted} onChange={()=>completeTodo(todo.id)}></input>
                                    <span className={todo.isCompleted ? `completed` :null}>
                                    {todo.text}
                                    </span>
                                    </div>
                                    <button className="btn-outline-danger" onClick={()=>deleteTodo(todo.id)}><i className="far fa-trash-alt"></i></button>
                                    
                                </li>

                            )
                        })
                    }
                </ul>
            </div>
        </div>

    )
}


export default Todos;