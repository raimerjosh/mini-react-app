export default function Post ({author,
                               title, 
                               text, 
                               numComments, 
                               src, 
                               postHint,
                              permalink}) {
      
 

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