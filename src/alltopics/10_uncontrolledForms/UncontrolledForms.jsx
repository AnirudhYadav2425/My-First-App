import React, { useRef } from 'react'

const UncontrolledForms = () => {
    const usernameRef=useRef("");
    const passwordRef=useRef("");

    const formHandle=(e)=>
    {
        e.preventDefault()
        // console.log(usernameRef.current.value);
        // console.log(passwordRef.current.value);

        let newUser={
            username:usernameRef.current.value,
            password:passwordRef.current.value
        }
        console.log(newUser);

        //! Clearing Input Fields
        usernameRef.current.value=""
        passwordRef.current.value=""
    };

  return (
    <div>
        <h1>UncontrolledForms</h1>

        <form>
            <label htmlFor="username">UserName</label>
            <input 
            type="text" 
            name='username' 
            id='username' 
            className='border' 
            ref={usernameRef} 
            />
            <br />

            <label htmlFor="password">Password</label>
            <input 
            type="text" 
            name='password' 
            id='password' 
            className='border' 
            ref={passwordRef} 
            />
            <br />
            
            <button type='submit' className='border' >Submit</button>
        </form>
    </div>
  )
}

export default UncontrolledForms