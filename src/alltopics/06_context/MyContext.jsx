import React from 'react'
import { createContext } from 'react'
import ParentA1 from './ParentA1'

//Step-1 :Creating a global store
export let myStore=createContext();

const MyContext = () => 
{   
    let data="Hello World"  

    console.log(myStore);// ContextObject -->  {Provider: {$$typeof:.........}}
     let user=
     {
        id:1,
        name:"Anirudh",
        msg:"Wellcome"
     }
  return (
    <myStore.Provider value={data}>
        <ParentA1/>
    </myStore.Provider>
    
    // <div>
    //     {/* <h1>MyContext</h1> */}
    // {/** Step-2 : Providing access to parent components */}
    // <myStore.Provider value={data}>
    //     <ParentA1/>
    // </myStore.Provider>

    // </div>
  )
}

export default MyContext