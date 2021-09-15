import './style.css'

function AllStates(props){
    // console.log( props )
    const states = []
    for ( let i = 0; i < props.data.length; i++ ){
        // console.log( props.data[i].state.name )
        states.push( <li> {props.data[i].state.name} </li>)
    }
    return (
        <section id="bg">

            <h1> All Nigeian States </h1>
             <ol>
                {states}
             </ol>  
        </section>
    )
}     

const StatesAndLGA = (props) => {
    return (
        <header></header>
    )
}

export {AllStates, StatesAndLGA}