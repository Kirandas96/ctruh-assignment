import { useState } from 'react';
import './App.css';
import { SketchPicker } from 'react-color';
import Canvas from './Components/Canvas';
function App() {
  const [x,setX]=useState(0)
  const [y,setY]=useState(0)
  const [cColor,setcColor]=useState("#fff")

   const handleClick=(e)=>{
    setX(e.pageX)
    setY(e.pageY)
   }
   const handleOnChange=(color)=>{
    setcColor(color)
   }
   const boxStyle={
    backgroundColor:cColor,
    width: "500px",
    height: "500px",
    border: "1px solid",
    margin: "auto"
   }
   
  return (
    <div className="App">
      <Canvas color={cColor} style={boxStyle} setX={setX} setY={setY}/>

      <h1 >X: {x} -- Y: {y}</h1>
  
      <div>
        <h1>Color Picker</h1>
        <SketchPicker
        color={cColor}
        onChangeComplete={(color)=>handleOnChange(color.hex)}
        />
      </div>
    </div>
  );
}

export default App;
