import {useState,useEffect} from "react"
import Pet from './Pet'
import useBreedlist from "./setBreedlist"
    // const location="Cairo"
    //className instead of class because class is used in js
    //in this example it wont render Cairo because its a constant location    we need to use hook useState()
/*const sum1=(x,y)=>x+y

const sum2=(x,y)=>(x+y)this is implicit return use in react and jsx
*/
    //e.target.value target is the input
    // if(true){
    // const [location23232,setLocation2232]=useState("")
    // }//will give error cuz we configured eslint 
    //<option /> which is empty option is not valid html but valid jsx/js
    //we used Onblur besides onChange because sometimes thebrowser doesnt catch onchange in accessability
    //when you return jsx orhtml tags you use return()


// htmlFor attribute is used to get the HTML for the given HTML elements
//With JSX you can write expressions inside curly braces { } . The expression can be a React variable, or property, or any other valid JavaScript expression.
//you could catch all the vars onsubmit and pass them to request pets and then print them

//https://reactjs.org/docs/events.html#supported-events 
//for complete react events

const SearchParams=()=>{
//useEffect allows you to say "do a render of this component first so the user can see something then as soon as the render is done, then do something (the something here being an effect.) In our case, we want the user to see our UI first then we want to make a request to the API 
    const [pets,setPets]=useState([])
    const ANIMALS=["cat","dog","rabbit","bird","reptile"]
    //the empty array is  the default value of pets and setPets is the one to change that value
    const [location,setLocation]=useState("")
    const [animal,setAnimal]=useState("")
    const [breed,setBreed]=useState("")
    const [breeds]=useBreedlist(animal)
    //useEffect has to be under useState
    useEffect(()=>{
        requestPets();
    },[])// eslint-disable-line react-hooks/exhaustive-deps
    //the empty array given means that it will be only called once when the page renders if yo gave something else that meas it will useEffect when that in the array changes

//http://pets-v2.dev-apis.com/pets?animal=bird will only return the pet obj with the animal bird
async function requestPets(){
    const res=await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`)
    const json=await res.json()
    setPets(json.pets)//now pets is an array filled with all the objects from api so index 0 has the first animal /location and the api has state? and breed
}

    return(
    
    <div className="search-params">
        <form onSubmit={(e)=>{e.preventDefault()
        requestPets()}}>
            <label HTMLfor="location">Location

            <input id="location" value={location} placeholder="location" onChange={(e)=>setLocation(e.target.value)} ></input>
            </label>
            <label HTMLfor="animal">Animal
            <select id={animal} 
            value={animal} 
            onChange={(e)=>
            setAnimal(e.target.value)
            
            }
             >
                <option />
             

             {ANIMALS.map((animal) => (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              ))}
            </select>
                </label>
                       <label HTMLfor="breed">Breed
            <select 
            disabled ={!breeds.length} id={breed} 
            value={breed} 
            onChange={(e)=>
            setBreed(e.target.value)
            
            }
             >
                
                <option />
                {breeds.map((breed) =>(<option key={breed} value={breed}>{breed}</option>))}
                
                
                </select>
                </label>
            <button>Submit</button>
        </form>
        {pets.map((pet)=>( <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />))}
    </div> 
   

)}
export default SearchParams;