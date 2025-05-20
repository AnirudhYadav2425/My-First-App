import Child2 from "./Child2";
import Child2B from "./Child2B";

const Parent2=()=>
{
    let str="Reactjs";
    let arr=["Forentend0","Backend","Database"];
    let obj={
        id:1,
        ename:"Anirudh"
    };
    return(
        <div>
            <h1>Parent 2 Component</h1>
            <Child2 props1={str} props2={arr} props3={obj} />
            <Child2B data={{str,arr,obj}} />
        </div>
    );
};
export default Parent2;