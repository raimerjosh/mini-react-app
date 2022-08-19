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
            <div>
                  {posts.map((post) => {
                        return <Post author={post.data.author}
                                          key={post.data.id}
                                          permalink={post.data.permalink}
                                          text={post.data.selftext}
                                          title={post.data.title}/>
                  })}
            </div>
      )
}

      



