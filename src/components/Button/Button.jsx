import { useRef } from "react"


export default function Button (){
  
const ref =useRef(null)



const handleCLick = () =>{
    ref.current++
    console.log(ref.current)
}
console.log("Component rendered");


    return (
      <div>
        <h2>{ref.current}</h2>
        <button onClick={handleCLick}>click</button>
      </div>
    );
}