import React from "react";
import Filter from "./Filter";
export default function Filters () {

    const categories = ['test 1', 'test 2', 'test 3'];

    return (
    
        <div className="filtersContainer">
            <h3>Categories</h3>
            {categories.map((category) => {
                return <Filter name={category}
                                key={category}/>
            })}
        </div>
    
    )

    }

   