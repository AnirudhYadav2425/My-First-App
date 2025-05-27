import React, { useState } from 'react'
import CreateTodo from './CreateTodo'
import DisplayTodo from './DisplayTodo'

const TodoWrapper = () => {

    const [todo,setTodo]=useState("");

    const [allTodos,setAllTodos]=useState([{id:1,text:"Hello World"}]);

    function addTodo(e)
    {
        e.preventDefault();
        console.log(todo);

        if(todo.trim()!=="")
        {
            let newTodo=
            {
                id:Date.now(),
                text:todo,
            };
            console.log(newTodo);
            
            setAllTodos([...allTodos, newTodo])
        }
        else
        {
            alert("Input field is Empty")
        }

        setTodo("");//Clear input field
    }


  return (
    <div>
        <CreateTodo todo={todo} setTodo={setTodo} addTodo={addTodo} />
        <DisplayTodo allTodos={allTodos} />
    </div>
  )
}

export default TodoWrapper