import React, { useContext } from 'react'
import ChildA1 from './ChildA1'
import { myStore } from './MyContext'
const ParentA1 = () => {
    let {data,user}=useContext(myStore);
  return (
    <div>
        <h1>ParentA1 {user} </h1>
        <ChildA1/>
    </div>
  )
}

export default ParentA1