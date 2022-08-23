import Posts from "./Posts";

export default function Post ({author,
                               title, 
                               text, 
                               link, 
                               numComments, 
                               src, 
                               video, 
                               postHint,
                              thumbnail,
                              permalink}) {
      
      //Conditional statement that determines if there is an image or not?
     
      //needs to filter if image or a link, or hosted:video
      //url is the sourc for each media type
           


      return (
            <div className='postContainer'>
                  <h1>{title}</h1>
                  <h3>posted by...{author}</h3>

                  {postHint === 'image' ? <img src={src}/> : <a href={`https://www.reddit.com${permalink}`}>more</a>}
                  
                  
                  
                  <p>{text}</p>
                  <p>Comments {numComments}</p>
            </div>
            
      )
};