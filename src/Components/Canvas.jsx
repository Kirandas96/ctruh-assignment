import React, { useRef, useEffect, useState } from 'react'

const Canvas = props => {
  
  const canvasRef = useRef(null)
 const[left,setLeft]=useState(0)
 const[right,setRight]=useState(0)
   const handleClick=(e)=>{
    
    props.setX(e.clientX-left)
    props.setY(e.clientY-right)
   }

  const draw = (context) => {
   let bw=300
   let bh=150
   let p=0
   for (var x = 0; x <= bw; x += 10) {
        context.moveTo(0.5 + x + p, p);
        context.lineTo(0.5 + x + p, bh + p);
    }

    for (var x = 0; x <= bh; x += 10) {
        context.moveTo(p, 0.5 + x + p);
        context.lineTo(bw + p, 0.5 + x + p);
    }
    context.strokeStyle = "black";
    context.stroke();
    context.fillStyle = props.color    
    context.fill()
  }
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    const rect = canvas.getBoundingClientRect();
    setLeft(Math.floor(rect.left))
    setRight(Math.floor(rect.right))
    //Our draw come here
    draw(context)
   
  }, [draw])
  return <canvas onClick={(e)=>handleClick(e)} style={props.style}
   ref={canvasRef} {...props}/>
}

export default Canvas