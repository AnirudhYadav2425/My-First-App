import React from 'react'


const InlineCSS = () => {

    let styles={
        backgroundColor:"red",
        color:"white",
        // margin:0,
        // padding:0, 
        // boxSizing: 'border-box', 
        // fontFamily:'sans-serif'
    }

  return (
    <div>
        <h1 style={styles} >InlineCSS</h1>

        <h1 style={{backgroundColor:"black", color:"white", 
            // margin:0, padding:0 ,boxSizing:"border-box", fontFamily:'sans-serif'
            }} >Hello World</h1>

    </div>
  )
}

export default InlineCSS