import React, { Component } from 'react'

export class MapDemo extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       employee:['raj','nisha','bubbly','habi','arthi']
    }
  }
  
    render() {
        const dataFetch=this.state.employee.map((data)=>{
            return<li>{data}</li>
        })
    return (
      <div>
        Mapdemo
        <ul>
            <li>{dataFetch}</li>
        </ul>
      </div>
    )
  }
}

export default MapDemo
