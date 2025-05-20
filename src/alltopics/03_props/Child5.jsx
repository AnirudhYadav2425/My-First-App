import React from 'react'

function Child5(props) 
{
    function handlebtn()
    {
        props.setState("Wellcome");
    }
  return (
    <div>
        <h1>Child5</h1>
        <button onClick={handlebtn}>Click</button>
    </div>
  )
}

export default Child5