// import ( the dependency of the component)
import './Boyo.css'

// the thing you are building
function addition(a,b){
    return a + b; // number
}

function sub( c, d ){
    return c - d // number
}

// component
// properties == props = parameter
// props is an object
// all the attributes ( data ) can be found in the props object
function Boyo(props){
    // console.log( {props} )
    // console.log( props.bgColor, props.height, props.complexion, props.gender, props.hairColor )
    console.log( props.bgColor)
    let segun  = 25
    return (
        <div style={
            {
                backgroundColor: props.bgColor,
                width : "200px",
                height :  "200px",   
            }
        }>
            <h1>Mr Boyo is now a react component</h1>
            <h2> {props.bgColor} </h2>
            <h3> props.complexion </h3>
            <h4> {segun} </h4>
        </div>
    )
}

// export
export { Boyo, addition, sub };
