import React from 'react'

function Child4(props) {
    console.log(props);
    

    const handlebtn=()=>
    {
        console.log("BTN Clicked");
        props.getData("Wellcome");
        
    };

  return (
    <div>
        <h2>Child4</h2>
        <button onClick={handlebtn}>click</button>
    </div>
  )
}

export default Child4