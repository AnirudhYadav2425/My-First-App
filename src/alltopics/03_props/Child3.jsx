const Child3=(props)=>
{
    console.log(props);//{getData:f}

    //! This Function will get Called after button Click
    function sendData()
    {
        props.getData("Hello From Child 3");//Send String data to Parent3 as Arguments.
    }

    return(
        <div>
            <h1>Child3 Component</h1>
            <button onClick={sendData}>Send Data</button>
        </div>
    );
};
export default Child3;