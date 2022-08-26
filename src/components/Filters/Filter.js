import React from "react";
import { NavLink } from "react-router-dom";

export default function Filter ({term, setFilter}) {



    const handleClick = () => {
        
        console.log('hello');

    }

    return (
        <div className="filterContainer">
            <NavLink to={`/filters/${term}`} onClick={handleClick}>
                {term}
            </NavLink>
        </div>
        
    )
}