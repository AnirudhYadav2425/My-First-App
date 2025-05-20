//rcc Class Based Function ShortCut
//rfcr Function BAsed Function ShortCut
import React from 'react'
import Child4 from './Child4'

const Parent4 = () => 
    {
        let [state,setState]=React.useState("");

        //This function will recive data from Child4 Compomnent
        function getData(x)
        {
            console.log(x);
            setState(x);
            
        }

  return (
    <div>
        <h1>
            Parent4 <span>{state}</span>{" "}
        </h1>
        <Child4 getData={getData} />
    </div>
  )
}

export default Parent4
