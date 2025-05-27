import React, { useContext } from 'react'
import ChildA2 from './ChildA2'
import { myStore } from './MyContext'


const ChildA1 = () => {
    let [data , user]= useContext(myStore);

  return (
    <div>
        <h1>ChildA1 {user.name} </h1>
        <ChildA2  />
    </div>
  )
}

export default ChildA1