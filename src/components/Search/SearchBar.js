import React, { useEffect } from "react";
import { loadSearchResults, setTerm } from "../Posts/postsSlice"; 
import { useDispatch } from "react-redux";
import { selectTerm } from "../Posts/postsSlice";
import { useSelector } from "react-redux";
import { store } from "../../store";
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