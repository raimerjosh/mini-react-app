import React, {useEffect} from "react";
import { selectPosts } from "./postsSlice";
import { useSelector, useDispatch } from "react-redux";
import { loadPosts } from "./postsSlice";
import Post from "./Post";


export default function Posts () {
      const dispatch = useDispatch();

      useEffect(() => {
            dispatch(loadPosts())
      }, [dispatch]);

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


      



