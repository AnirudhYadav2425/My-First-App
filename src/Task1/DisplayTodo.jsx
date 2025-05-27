import React from 'react'
import style from './displaytodo.module.css'


const DisplayTodo = ({allTodos,editTodo}) => {
    console.log(allTodos);

    
  return (
    <div>
        {allTodos.map((ele) =>
        {
            return(
                <div key={ele.id} className={style.todoDiv} >
                    <h2>{ele.text}</h2>
                    <button onClick={()=> editTodo(ele.id)}>Edit</button>
                    <button>Delete</button>
                </div>
            );
        })};
    </div>
  )
}

export default DisplayTodo