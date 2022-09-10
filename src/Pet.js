import React from "react";
import  ReactDOM  from "react-dom"
import {Link} from 'react-router-dom'
//a does a full page refresh instead use link for internal links Link and to
//hold alt and 0150 for an em dash or window key and period for emoji tab under symbols
//use a for third parties

const Pet=({name,id,images,key,breed,animal,location})=>{
    let hero="http://pets-images.dev-apis.com/pets/none.jpg"
    if(images.length)
    {
        hero=images[0]
    }

    
return(
<Link to={`/details/${id}`} className="pet" >
<div className="image-container">
<img src={hero} alt={name}/>

</div>


<div className="info">
    <h1>{name}</h1>
    <h2>{`${animal}–${breed}–${location}`}</h2>
</div>
</Link>
)}


// const Pet = (props) => {
//     return React.createElement("div", {}, [
//       React.createElement("h1", {}, props.name),
//       React.createElement("h2", {}, props.type),
//       React.createElement("h2", {}, props.breed),
// ]);
// };
export default Pet;
//parcel allowed this