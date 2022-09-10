import Pet from './Pet'
const Results = (props)=>{
    const pets=props.pets
    //it takes props from the input and if you passed pets it is in props.pets or just use {pets}
    //!pets.length ? (if the condition is true do this):(otherwise do this) ternery expression/operator
    //we use {}if we want to access a js variable/const
//{} everything that goesinside the the curly praces has to be a expression andif statements is not and expression
//an exampleof an exporession is const x=7; so wecant put if statements inside {}
//if we want to type in tags from js type in {}

    return(
        <div>
    {!pets.length ? 
         (
            <h1>no pets found</h1>
        ):
            
        (
            pets.map((pet)=>( <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} id={pet.id} images={pet.images} location={`${pet.city},${pet.state}`} />))
        )}
        
    
    </div>
    )
}
export default Results