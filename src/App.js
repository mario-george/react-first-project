/* eslint-disable no-undef */
//import React from "react"
//import  ReactDOM  from "react-dom" to cancel errors

//in command npm run lint -- -fix you pass  -- that property to eslint not to npm cuz it doesnt have fix property
//prettier makes the code nicer put ; at the end and tabs eslint for functional things like use this api instead of that one 
/*React error is from eslint ignore it 
.gitignore contain all the directories that will be ignore by git
*/
import ThemeContext from "./ThemeContext";
import {StrictMode}  from "react";
import { useState } from "react";
import Details from "./Details";//when you import Details this is just a name what gets run is the after export default
import {HashRouter,BrowserRouter,Routes,Route,Link} from 'react-router-dom'
// when we npm i react-dom-router we wont but -D because it is in production
// whennpm install react-router-dom@6.2.1 you can use --force if dependecy error in react18 but u can use it
//anything that start with use is hook
//dont use hooks with if or for statements you can config eslint for this

//Strict mode makes your code more future proof i.e for the next react version
//NODE_ENV=development takes alot of size and it is made for the strings of error to display if you inspect element it will give you error in console i.e dont give pets key but production strips those off and is lightweight
import Pet from "./Pet"
import SearchParams from "./searchparams"
import ReactDOM  from "react-dom"
/*inside browser router you can use router components and functionality and you can use it multiple times
 */
/*          <Route path="details/:id" element={<Details/>}></Route> one of these will berendered t a time
 */
//element={<Details/> element this is what you want to render when the path is matched /details/:id you tpye the variable after : you cant type /:animal
//routes inside routes it will still rference to its parent route so if detils/1/2 and put link to contact where 2 is contact use child route
//"details/:id" can be however you want like "details/:lol" that will be variable can contain muliple vars details/:id/:othervar
//<Link to="/">Adopt me</Link> to / means the homepage
//HashRouter will put # like that /#id not necessary coming out of the page
const App=()=>{
  const theme = useState("red")//valid css color
  const theme2 = useState("red")//valid css color

  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
          <HashRouter>
          <header>
            <ThemeContext.Provider value={theme2}>
          <Link to="/">Adopt me</Link>
          </ThemeContext.Provider>
          </header>
          <Routes>
          <Route path="details/:id" element={<Details />}/>
          <Route path="/" element={<SearchParams />} />
          </Routes>
    </HashRouter>
    </ThemeContext.Provider>
  </StrictMode> 
   )

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
