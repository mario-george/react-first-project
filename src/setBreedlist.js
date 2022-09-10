//making your own hook
import {useState,useEffect,useDebugValue} from 'react'


var localcache ={}
//local cache is an obj that is designed to obtain key:value as animalas a string:breedlist as an array
export default function useBreedlist(animal){
    const [status,setStatus]=useState("unloaded")//def value is unloaded
    const [breedlist,setBreedlist]=useState([])
// if (!string ) is the same as if(String == NULL)


// useEffect(()=>{
// alert(status)
// },[status])

useDebugValue("hi from react")
useDebugValue("number of objects in localcache is :" +Object.keys(localcache).length)
useEffect(()=>{
    if(!animal){
        setBreedlist([])
    }//animal is empty array{}
    else if (localcache[animal]){
        
setBreedlist(localcache[animal])
    }
    else{requestBreedlist();}
async function requestBreedlist(){
    setStatus("loading")
    const res=await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`)
    const json=await res.json()
    localcache[animal]=json.breeds || []//if didnt find the given animal breeds set as empty array
    setBreedlist(localcache[animal])
    setStatus("loaded")
}
},[animal])
//so if animal changes it will do all of that
return [breedlist,status]
}