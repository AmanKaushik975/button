
function Button(){
const changeText = () =>{
    const ans = document.getElementById("b1");
    ans.textContent = "ouch";
}
    
return(<button id="b1" onClick={changeText}> click me</button>);
    

}
export default Button