import React, { createContext } from 'react'

export const GLOBLE_CONTEXT=createContext();

const Context2 = (props) => {
    console.log(props);//{children:{$$typeof:......}}

    const data="Hello World";
    
  return (
    <GLOBLE_CONTEXT.Provider value={data} >
        {props.children}
    </GLOBLE_CONTEXT.Provider>
  );
};

export default Context2