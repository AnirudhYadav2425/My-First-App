import React, { useState } from 'react'

const ControlledForms1 = () => {
    let [username,setUsername]=useState("");
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");

    let handleUsername=(e)=>
        {
            setUsername(e.target.value);
        }
     let handleEmail=(e)=>{
        setEmail(e.target.value);
     }
      let handlePassword=(e)=>{
        setPassword(e.target.value);
      }

      let formHanddle=(e)=>
      {
        e.preventDefault();
        console.log({username,email,password});

        //Clearing Input Fields
        setUsername("");
        setEmail("");
        setPassword("");
        
      }


  return (
    <div>
        <h1>ControlledForms1</h1>

        <form onSubmit={formHanddle} >
            <label htmlFor="username">UserName</label>
            <input type="text" id='username' value={username} onChange={handleUsername} />
            <br />
            <label htmlFor="email">Email</label>
            <input type="text" id='email' value={email} onChange={handleEmail} />
            <br />
            <label htmlFor="password">Password</label>
            <input type="text" id='passeord' value={password} onChange={handlePassword}/>
            <br />

            <button type="submit">Submit</button>


        </form>
    </div>
  )
}

export default ControlledForms1