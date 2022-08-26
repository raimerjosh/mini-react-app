import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//thunk action createer will generate 3 action types: 'posts/loadPosts/pending', etc for
//pending, fulfilled, and rejected

//Currently, these 3 action types have no effect on our posts slice, which would only responds 
//to action types generated by createSlice.

export const loadPosts = createAsyncThunk(
      'posts/loadPosts',
      async ([term, pageType]) => {

//conditional determines if there is a search term, if not it will load popular page
		
let url = '';

		if (pageType === 'home') {
			url = 'https://www.reddit.com/r/popular.json';
		} else if (pageType === 'search') {
			url = `https://www.reddit.com/search.json?q=${term}`;
		} else if (pageType === 'filter') {
			url = `https://www.reddit.com/r/${term}.json`;
		}

		
		const data = await fetch(url);
		const json = await data.json();
		return json.data.children;

		   
    }
);


export const postsSlice = createSlice({
      //should the eventhandlers for the searchbar go in the reducer? 

      name: 'posts',
      initialState: {
            posts: [],
            isLoading: false,
            hasError: false,
      },
      reducers: {}
      ,
      //reducers for loadPosts
      extraReducers: {
            [loadPosts.pending]: (state, action) => {
                  state.isLoading = true;
                  state.hasError = false;
            },
            [loadPosts.fulfilled]: (state, action) => {
                  state.isLoading = false;
                  state.posts = action.payload;
            },
            [loadPosts.rejected]: (state, action) => {
                  state.isLoading = false;
                  state.hasError = true;
            }, 
      }
});







export const selectPosts = (state) => state.posts.posts;

export const selectTerm = (state) => state.posts.term;

export const { setTerm } = postsSlice.actions;

export default postsSlice.reducer; 





