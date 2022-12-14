import React, {useEffect} from "react";
import { selectPosts } from "./postsSlice";
import { useSelector, useDispatch } from "react-redux";
import { loadPosts } from "./postsSlice";
import Post from "./Post";
import { useParams } from "react-router-dom";

export default function Posts ({pageType}) {

      const dispatch = useDispatch();
      
      const posts = useSelector(selectPosts);

      const { term } = useParams();

      useEffect(()=> {

            dispatch(loadPosts([term, pageType]))

      }, [dispatch, term, pageType]);
      


      
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


      



