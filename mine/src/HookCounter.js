import React,{useState} from 'react'

export default function HookCounter() {
  const [count, setCount]=useState(0)
    return (
    <div>
      HookCounter
      <button onClick={()=>setCount(count+1)}>count:{count}</button>
    </div>
  )
}
