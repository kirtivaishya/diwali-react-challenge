import React ,{useState} from 'react'
import SearchBox from "../component/SearchBox/SearchBox";
import CharacterTiles from "../component/CharactersTiles/CharacterTiles"

const ExploreCharacters = (props) => {
   const {charactersArray} = props;
  // console.log(charactersArray[0].name);
   const [searchTerm,setSearchTerm]=useState('');
   let cleanSearchQuery= '';
   const handleInput=event=>{
     cleanSearchQuery= event.target.value.toLowerCase();
    setSearchTerm(cleanSearchQuery)
   } 
   const filteredResult= charactersArray.filter(element => {
    return element.name.toLowerCase().includes(searchTerm) && element.image !==""
   });

    return (
        <div>
             <SearchBox label={"Search your fav character"} searchTerm={searchTerm} handleInput={handleInput}></SearchBox>
             <CharacterTiles showCharacters={filteredResult}></CharacterTiles>
        </div>
    )
}

export default ExploreCharacters
