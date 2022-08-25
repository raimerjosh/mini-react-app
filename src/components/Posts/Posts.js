import React, {useEffect} from "react";
import { loadSearchResults, selectPosts, selectTerm } from "./postsSlice";
import { useSelector, useDispatch } from "react-redux";
import { loadPosts } from "./postsSlice";
import Post from "./Post";
import { useParams } from "react-router-dom";

export default function Posts () {
      const dispatch = useDispatch();
      //loadPosts gets called on the first render, posts with searchterm url param will be called on submit

      const posts = useSelector(selectPosts);

      const { term } = useParams();

      useEffect(()=> {
            dispatch(loadPosts(term))
      }, [dispatch]);


      //if statement goes here to determine if posts is selectPosts or if it is loadSearchTerm(term)

      
      // useEffect((term) => {
      //       dispatch(loadSearchResults(term))
      // }, [dispatch]);



      
      return (
            <div className='postsContainer'>          
                  {posts.map((post) => {
                    return <Post author= {post.data.author}
                                        key= {post.data.id}
                                        src= {post.data.url}
                                        text= {post.data.selftext}
                                        title= {post.data.title}
                                        numComments= {post.data.num_comments}
                                        postHint={post.data.post_hint}
                                        permalink={post.data.permalink}/>
                  })}
                
            </div>
            
      )}


      



