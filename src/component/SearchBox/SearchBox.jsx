import React from 'react'
import "./SearchBox.scss"

const SearchBox = (props) => {
const {label, SearchTerm,handleInput}=props;
    return (
        <div className="search-box">
            <label className="search-box__label">{label}</label>
            <input className="search-box__input" value={SearchTerm} onInput={handleInput}></input>
        </div>
    )
}

export default SearchBox
