import './style.css'


/**
 * list all the countries in the world with their flag
 * @param {*} props 
 * @returns 
 */
function AllCountry(props){
    let namesElement = []
    for( let index = 0; index < props.names.length; index++ ) {
        namesElement.push( <li> { props.names[index] } <span> { props.flag[index] } </span> </li> )
    }

    return (
        <section>
            <h1>All Countries</h1>
            <ol>
                {namesElement}
            </ol>
        </section>
    )
}

export default AllCountry;