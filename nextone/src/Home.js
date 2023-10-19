import React from 'react'

export default function Home(props) {
  return (
    <div>
     <h1>hello {props.n
     } practice- {props.practice} {props.children}</h1>
    </div>
  )
}
