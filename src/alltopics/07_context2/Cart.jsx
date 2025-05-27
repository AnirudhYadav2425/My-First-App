import React, { useContext } from "react";
import { GLOBLE_CONTEXT } from "./Context2";

const Cart = () => {

    let val=useContext(GLOBLE_CONTEXT);

  return <div>Cart {val} </div>;
};

export default Cart;
