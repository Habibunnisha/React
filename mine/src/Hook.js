import React,{useEffect, useState} from 'react' 
function Example(){
    const [fruit, setFruit]=useState(0)

    useEffect(()=>{
        // Updating the document title using the browser API
        document.title=`you clicked ${fruit} times`
    })

    return(
        <div>
            Hook method useState 
            <p>Increased fruit clicked {fruit} times</p>
            <button onClick={()=>setFruit(fruit+1)}> FRUIT CLICK</button>
        </div>
    )
}
function Example2(){
    return(
        <div>
           example2
           <h1>123</h1>
        </div>
        
    )
}



export   {Example,Example2}