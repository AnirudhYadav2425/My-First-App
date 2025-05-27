import React from 'react'

const DisplayTodo = ({allTodos}) => {
    console.log(allTodos);

    
  return (
    <div>
        {allTodos.map((ele) =>
        {
            return(
                <div key={ele.id}>
                    <h2>{ele.text}</h2>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            )
        }
    )}
    </div>
  )
}

export default DisplayTodo