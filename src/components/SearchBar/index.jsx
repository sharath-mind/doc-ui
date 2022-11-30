import React from 'react'
import style from "./search-bar.module.css"
import searchIcon from "../../assets/icons/search-icon.svg"

const SearchBar = () => {
    return (
        <div className={style.container}>
            <div className={style.input}>
                <input type="text" placeholder="Search Doctor" />
            </div>
            <div className={style.searchIcon}>
                <img src={searchIcon} alt="icon" />
            </div>
        </div>
    )
}

export default SearchBar