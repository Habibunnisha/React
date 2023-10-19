import React,{useState} from 'react'

export default function TitleProgram() {
  
  let [title, changeTitle]=useState('React Training')
  function handleChange(event){
    changeTitle(event.target.value)
  } 
  return (
    <div>TitleProgram{title}
      <input type='text' name='title' onChange={(event)=>handleChange(event)}></input>
    </div>
  )
}
