import React from "react";
import Child1 from "./ChildA";
function Parent1() {
  console.log("Parent 1 component");

  const [add, setAdd] = useState(0);

  const update = () => {
    setAdd(add + 1);
  };

  return (
    <div>
      <h1>
        Parent1 - {add}
        <button onClick={update}>update</button>
      </h1>
      <Child1 />
    </div>
  );
}

export default Parent1;
