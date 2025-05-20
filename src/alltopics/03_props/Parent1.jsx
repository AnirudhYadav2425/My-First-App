import Child1 from "./Child1"

const Parent1=()=>
{
    let str="Hello Child 1"
    let user={
        id:1,
        ename:"Anirudh"
    };
    let arr=[10,20,30,40];
    
    let products=
    [
        {
        id:1,
        name:"Redmi",
        price:20000,
        },
        
        {
        id:2,
        name:"Apple",
        price:50000,
        },
        
        {
        id:3,
        name:"Realme",
        price:20000,
        }
];
    return(
        <div>
            <h1>I am Parent One</h1>
            <Child1 str={str} user={user} arr={arr} products={products}/>
        </div>
    );
};
export default Parent1