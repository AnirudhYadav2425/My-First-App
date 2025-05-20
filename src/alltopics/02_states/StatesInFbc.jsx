
import { useState } from "react";

const StatesInFbc = () =>
{
    // console.log(useState());//[ud,f]
    
    let [state,setState] = useState("add to cart");
    console.log(state);
    console.log(setState);
    
    function cartbtn()
    {
        // console.log("btn clicked");
        setState("go to cart")
    }

    return(
        <div>
            <h1>States In Function Based Component</h1>
            <button onClick={cartbtn}>{state}</button>
        </div>
    );
};
export default StatesInFbc