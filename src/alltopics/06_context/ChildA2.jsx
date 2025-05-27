import React from 'react'
import { useContext } from 'react'
import { myStore } from './MyContext'


const ChildA2 = () => {

    //Step-3 : Consume a context
    let data =useContext(myStore);
    console.log(data);
    

  return (
    <div>
        <h1>ChildA2 {data}</h1>
    </div>
  )
}

export default ChildA2