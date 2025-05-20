import { useState } from "react";
import Child3 from "./Child3";

const Parent3=()=>
{
    const [state,setState]=useState("");

    function getDataFromChild(data)
    {
        console.log(data);// From Child3 Component --> Hi From Child3
        setState(data);//Storing data to state to display on UI.
    }
    // function greet(data)
    // {
    //     console.log("Welcome");
        
    // }
    return(
        <div>
            <h1>Parent3 {state} </h1>
            <Child3 getData={getDataFromChild} />
        </div>
    );
};
export default Parent3;