import React, { useState } from 'react'
import "./CharactersTiles.scss"

const CharacterTiles = (props) => {
const {showCharacters}=props;
const [info,setInfo]=useState(false);
const handleClick=()=>{
    setInfo(!info);
}

const showCharactersJSX = showCharacters.map((character,index)=>(
    <div className="character-tile">
    
    <img className="character-tile__img" src={character.image} key={index}></img>
    
    <label className="character-tile__heading">{character.name}</label>
    
    <p className="character-tile--text">
    <br/>Gender :{character.gender}   <br/>
    House : {character.house} <br/>
    Patronus : {character.patronus}<br/>
    Actor : {character.actor}</p>
    
    </div>
    
));

// const showCharactersInfoJSX = showCharacters.map((character,index)=>(
//     <div>
//     <label>{character.name}</label>    
    
//     <button onClick={handleClick}>close</button>
//     </div>
// ));

    return (
        <>
        {/* {info?showCharactersInfoJSX:showCharactersJSX} */}
        {showCharactersJSX}
        </> 
   )
}

export default CharacterTiles
