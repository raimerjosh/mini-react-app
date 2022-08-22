import Posts from "./Posts";

export default function Post ({author,
                               title, 
                               text, 
                               link, 
                               numComments, 
                               src, 
                               video, 
                               postHint}) {
      
      //Conditional statement that determines if there is an image or not?
      //for if isVideo is true, should be able to post video
      //isVideo=boolean, postHint= string('link', 'video', 'image')

      //url is the sourc for each media type
      
      return (
            <div className='postContainer'>
                  <h1>{title}</h1>
                  <h3>posted by...{author}</h3>
                  <img src={src}/>
                  <p>{text}</p>
                  <p>Comments {numComments}</p>
            </div>
            
      )
};