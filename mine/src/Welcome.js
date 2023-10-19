function Welcome(props){
    return(
        <h1>hello {props.name} {props.id} now play with react u dont have any option {props.children} </h1>
    )
}

export default Welcome

//for single statement
//const welcome=()=><h1>welcome  to react application</h1>