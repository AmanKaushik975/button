import React, { useState } from "react"

function Component(){


    const [name , setName] = useState("Guest");
    let [age,setAge]  = useState(0);
    let[isEmplyeed,setEmployeed] = useState(false);

   const changeName = () =>{
        setName("Pokemon");
    }

    const increaseAge = ()=>{
        setAge(age+1);
    }
let changeStatus = () => {
    setEmployeed(!isEmplyeed);
}

    return(<>
    <p>Name : {name}</p> 
    <button onClick={changeName}>cick me</button>

    <p>Age : {age}</p>
    <button onClick={increaseAge}>Increase Age</button>
    <p>Is Employeed: {isEmplyeed ? "Yes" : "No"}</p>
    <button onClick ={changeStatus}>Change Employee Status</button>

    
    </>)
}

export default Component