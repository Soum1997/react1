import React, { useEffect, useState } from 'react'

function Register() {

    //Hooks
    //useState()
    const [email, setEmail]=useState();
    const [password,setPassword]=useState();
    const [age,setAge]=useState(13);

    function handleRegister(event){
        event.preventDefault(); // do not reload the screen
        console.log("Hello");
    } 

    function increaseAge(event){
      event.preventDefault();
      setAge(age+1);
    }

    console.log(email)
    console.log(password)

    useEffect(()=>{
      console.log("age:", age);
    }, [age]); //Dependancy array-We provide this with state variables, or any variables that are changing in nature, hit a re-render


    // Conditional Rendering 
    // let age =12;
    // let email="soum2018r@gmail.com";
    
  return (

    // <form>
    //     {age>18 || email=="soum2018r@gmail.com"?(
    //         <div>
    //         <input type="email" placeholder='Enter Email'></input>
    //         <button onClick={handleRegister}>Submit</button>
    //         </div>
    //     ): <h1>You are not soumya</h1>}
        
    // </form>

    <form>
        <div>
          <h1>{age}</h1>
          <button onClick={increaseAge}>Increase</button>
            <input 
              type="email" 
              placeholder='Enter Email'
              value={email}
              onChange={(e)=>setEmail(e.target.value)} // change email value dynamically
              ></input>
            <input 
            type="password" 
            placeholder='Enter Password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            ></input>

            <button onClick={handleRegister}>Submit</button>
        </div>        
    </form>
  )
}

export default Register

// Hooks

// useState() 
// useEffect()
// useMemo()
