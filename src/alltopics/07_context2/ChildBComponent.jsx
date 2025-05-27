import React, { useContext } from 'react'
import { GLOBLE_CONTEXT } from './Context2'

const ChildBComponent = () => 
    {
        let val=useContext(GLOBLE_CONTEXT)
        console.log(val);
        
  return (
    <div>
        <h1>ChildBComponent {val} </h1>
    </div>
  )
}

export default ChildBComponent