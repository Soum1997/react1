import React, { useMemo, useState } from 'react';
import {Link} from "react-router-dom";

const expensiveCalculation=(num)=>{
    console.log("Calculating...");
    for(let i=0; i<1000000000; i++){
        num +=1;
    }
    return num;
}
function Registra() {
    const[count,setCount]=useState(0);
    const[todos,setTodos]=useState([]);
    const calculation=useMemo(()=>expensiveCalculation(count),[count]);

    const increment = ()=>{
        setCount((c)=>c+1);
    }
    const addTodo=()=>{
        setTodos((t)=>[...t,"Todo task"]);
    }
  return (
    <div>
        <div>
        <h2>My Todos</h2>
        {todos.map((todo,index)=>{
            return <p key={index}>{todo}</p>
        })}
        <button onClick={addTodo}>Add Todo</button>
        </div>
        <hr />
        <div>
            Count: {count}
            <button onClick={increment}>+</button>
            <h2>Expensive Calculation</h2>
            {calculation}
            <div>
                {/* <button>Take Me To User List</button> */}
                <Link to="/">Take to User List Screen</Link>
            </div>
        </div>
    </div>
  )
}

export default Registra