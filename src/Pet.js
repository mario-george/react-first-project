import React from "react";
import  ReactDOM  from "react-dom"
const Pet=(props)=>{return(

<div>
<h1>{props.name}</h1>
<h2>{props.type}</h2>
<h2>{props.breed}</h2>
</div>

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