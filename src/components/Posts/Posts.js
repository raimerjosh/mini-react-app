import React, {useEffect} from "react";
import { selectPosts } from "./postsSlice";
import { useSelector, useDispatch } from "react-redux";
import { loadPosts } from "./postsSlice";
import Post from "./Post";
import { useParams } from "react-router-dom";

export default function Posts () {
      const dispatch = useDispatch();
      //loadPosts gets called on the first render, posts with searchterm url param will be called on submit

      useEffect(() => {
            dispatch(loadPosts())
      }, [dispatch]);


      //if statement goes here to determine if posts is selectPosts or if it is loadSearchTerm(term)

      const posts = useSelector(selectPosts);

      console.log(posts);
      
      
      return (
            <div className='postsContainer'>          
                  {posts.map((post) => {
                    return <Post author= {post.data.author}
                                        video= {post.data.is_video}
                                        key= {post.data.id}
                                        src= {post.data.url}
                                        text= {post.data.selftext}
                                        title= {post.data.title}
                                        numComments= {post.data.num_comments}
                                        postHint={post.data.post_hint}
                                        thumbnail={post.data.thumbnail}
                                        permalink={post.data.permalink}/>
                  })}
                
            </div>
            
      )}


      



