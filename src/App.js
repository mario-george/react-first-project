/* eslint-disable no-undef */
//import React from "react"
//import  ReactDOM  from "react-dom" to cancel errors

//in command npm run lint -- -fix you pass  -- that property to eslint not to npm cuz it doesnt have fix property
//prettier makes the code nicer put ; at the end and tabs eslint for functional things like use this api instead of that one 
/*React error is from eslint ignore it 
.gitignore contain all the directories that will be ignore by git
*/
import { useState } from "react";
//anything that start with use is hook
//dont use hooks with if or for statements you can config eslint for this


import Pet from "./Pet"
import SearchParams from "./searchparams"
import ReactDOM  from "react-dom"

const App=()=>{
  return <SearchParams/> 

}
ReactDOM.render(<App/>,document.getElementById("root"))


//this is jsx you need to put self closing tag otherwise syntax error not like html
//if you put </Pet> you will have props.children property
//saving the file as jsx or js is optional 
// const App =()=>{
// return(
//   <div>
// <h1>Adopt me</h1>
// <Pet name="Jacksaw" type="bird" breed="bird2" />
// <Pet name="sam" type="dog" breed="german" />
// <Pet name="goodCat" type="cat" breed="white" />

// </div>
// )
// }
// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt me"),
//     React.createElement(Pet, { name: "Jacksaw", type: "bird", breed: "bird2" }),
//     React.createElement(Pet, { name: "sam", type: "dog", breed: "german" }),
//     React.createElement(Pet, { name: "goodCat", type: "cat", breed: "white" }),
//   ]);
// };

ReactDOM.render(<App/>, document.getElementById("root"));
