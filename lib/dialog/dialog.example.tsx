import React from "react";
import { useState } from "react";
import Dialog, {alert, confirm, modal} from "./dialog";

export default function () {
  const [x,setX] = useState(false);
  const [y, setY] = useState(false);

  const openModal = () => {
    const close = modal(<h1>你好, example 4
      <button onClick={() => close()}>close</button>
    </h1>);
  };

  return (
    <div>
        <div style={{position: 'relative', zIndex: 10, border: '2px solid red'}}>
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

      <div style={{position: 'relative', zIndex: 9, border: '2px solid yellow'}}>
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

      <div style={{position: 'relative', zIndex: 8, border: '2px solid grey'}}>
        <h1>example 3</h1>
        <button onClick={() => alert('hi, example 3, alert')}>alert</button>
        <button onClick={() => confirm('hi, example 3, confirm', () => {
        }, () => {
        })}>confirm
        </button> 
      </div>

      <div style={{position: 'relative', zIndex: 7, border: '2px solid green'}}>
        <h1>example 4</h1>
        <button onClick={openModal}>modal</button>
      </div>

    </div>

  )
}