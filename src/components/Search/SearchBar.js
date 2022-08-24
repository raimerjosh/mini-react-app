import React from "react";
import { loadSearchResults } from "../Posts/postsSlice"; 
import { useDispatch } from "react-redux";



export default function SearchBar () {
    const dispatch = useDispatch();


	const handleSubmit = dispatch(loadSearchResults())

      return (

		<div className='formContainer'>
			<form className='searchBarContainer'>
    			<input type="text" name="name" placeholder="search..."/>
  				<input type="submit" value="Submit" />
			</form>
		</div>

		
      )
}