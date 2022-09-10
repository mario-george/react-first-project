import { createContext } from "react";
//{ createContext } is called destructuring
//#f06d06 orange
const ThemeContext=createContext("green",()=>{})//greenis the def value and since it is not a hook we give it a fn that does nothing
export default ThemeContext
