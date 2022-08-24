import React, { useState } from "react";
import { loadSearchResults } from "../Posts/postsSlice"; 
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";



export default function SearchBar () {
    const dispatch = useDispatch();
	
	// const { term } = useParams();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e);
		const term = e.target.value;
		console.log(term);
	};

      return (

		<div className='formContainer'>
    		<form className='searchBarContainer'>
  				<input type="text" />
				<input type="submit"  onSubmit={handleSubmit}/>
			</form>
		</div>

      )
}