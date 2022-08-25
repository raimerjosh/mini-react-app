import React, {useEffect} from "react";
import { loadSearchResults, selectPosts, selectTerm } from "./postsSlice";
import { useSelector, useDispatch } from "react-redux";
import { loadPosts } from "./postsSlice";
import Post from "./Post";
import { useParams } from "react-router-dom";

export default function Posts () {

      const dispatch = useDispatch();
      
      const posts = useSelector(selectPosts);

      const { term } = useParams();

      useEffect(()=> {
            dispatch(loadPosts(term))
      }, [dispatch]);


      
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


      



