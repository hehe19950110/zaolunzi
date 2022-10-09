import React from "react";
import { useState } from "react";
import Dialog from "./dialog";

export default function () {
  const [x,setX] = useState(false);
  return (
    <div style={
      {position: 'relative', 
       zIndex: 10, 
       border: '1px solid red', 
       color: 'red'}
      }>
       <h1>example 1</h1>
       <button onClick={() => setX(!x)}>click</button>
       <Dialog visible={x}>
         <strong>hi</strong>
       </Dialog>
    </div>
  )

}