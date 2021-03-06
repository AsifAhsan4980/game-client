import React from "react";
import "./search.css"


const Search = () => {
    return(
        <>
            <div className="wrap m-2">
                <div className="search">
                    <input type="text" className="searchTerm" placeholder="What are you looking for?"/>
                        <button type="submit" className="searchButton">
                            <i className="fa fa-search"></i>
                        </button>
                </div>
            </div>
        </>
    )
}

export default Search