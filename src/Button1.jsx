import React,{useState} from "react";
function Button1(){

    // create 3 buttons for dec reset and dec
    const [count,setCount] = useState(0);

    let dec = () =>{
        setCount(count-1);
    }
    let reset = () =>{
        setCount(0);
    }
    let inc = () =>{
        setCount(count+1);
    }

        return(<div className="outer-div"><div className="count-container"> 
                    <h2 className="heading">Counter Programme</h2>
                <p className="count">{count}</p>
                <div className="Buttons">
                <button onClick={dec}>Decrease</button>
                <button onClick={reset}>Reset</button>
                <button onClick={inc}>Increase</button>
                </div>
                </div></div>);
}
export default Button1;