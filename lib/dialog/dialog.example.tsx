import React from "react";
import { useState } from "react";
import Dialog from "./dialog";

export default function () {
  const [x,setX] = useState(false);
  const [y, setY] = useState(false);

  return (
    <div>
        <div>
        <h1>example 1</h1>
        <button onClick={() => setX(!x)}>click</button>
        <Dialog visible={x} buttons={
          [
            <button onClick={() => {setX(false);}}>ok</button>,
            <button onClick={() => {setX(false);}}>cancel</button>
          ]
        } onClose={() => {setX(false);}}>
          <strong>hi,example 1</strong>
        </Dialog>
      </div>

      <div>
        <h1>example 2</h1>
        <button onClick={() => setY(!y)}>click</button>
        <Dialog visible={y} closeOnClickMask={true} buttons={
          [
            <button onClick={() => {setY(false);}}>1</button>,
            <button onClick={() => {setY(false);}}>2</button>
          ]
        } onClose={() => {setY(false);}}>
          <strong>hi,example 2</strong>
        </Dialog>
      </div>

    </div>

  )

}