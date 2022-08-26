import React from "react";
import Filter from "./Filter";
import { useState } from "react";

export default function Filters () {

    const [filter, setFilter] = useState('');

    const subReddits = ['popular', 'funny', 'interestingasfuck', 'politics', 'pics'];

    return (
        
        <div className="filtersContainer">
            <h3>Categories</h3>
            {subReddits.map((term) => {
                    return <Filter term={term}
                                    key={term}
                                    setFilter={setFilter}/>
            })}
        </div>
    )
}

   

