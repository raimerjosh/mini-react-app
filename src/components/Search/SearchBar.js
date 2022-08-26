import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function SearchBar () {
    
	const dispatch = useDispatch();
	const history = useHistory();
	const [ term, setTerm ] = useState('');

	//handles term state change to have up to date value of term
	const handleSubmit = (e) => {
		history.push(`/search/${term}`); 
	}
	

      return (

		<div className='formContainer'>
    		<form className='searchBarContainer'
					onSubmit={handleSubmit}>
  				<input placeholder='search...' type="text" onChange={(e) => setTerm(e.target.value)}/>
				<input type="submit" />
			</form>
		</div>

      )
}