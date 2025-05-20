const Child2 = (props)=>
{
    console.log(props);
    let {props1, props2,props3}=props;
    console.log(props1,props2,props3);
    

    return(
        <div>
            <h1>Child 2 Component</h1>
        </div>
    );
};
export default Child2;