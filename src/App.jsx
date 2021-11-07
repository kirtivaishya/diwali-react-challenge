import { useState } from "react";
import React,{useEffect} from 'react'
import ExploreCharacters from "./container/ExploreCharacters"
import "./App.css"

const App = () => {
// const searchInput;
const [characters,setCharacters]=useState(null);
  useEffect(()=>{
  fetch("http://hp-api.herokuapp.com/api/characters")
  .then(res=>res.json())
  .then(data=>setCharacters(data))
  .catch(err=>console.log(err))}
  ,[]);

  //console.log(characters[0].name);  
  return (
    <div  className="App-header">   
      <title>Harry Potter Characters Bible</title>
      <h1>Harry Potter Characters Bible</h1>
      {/* <label>Total characters {characters.length}</label> */}
     
      {characters && <ExploreCharacters charactersArray={characters}/>}
      
     
      
    </div>
  )
}

export default App
