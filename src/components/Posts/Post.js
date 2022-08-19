import Posts from "./Posts";

export default function Post ({author, title, permalink, text, link, key}) {

      return (
            <div>
                  <h1>{title}</h1>
                  <h3>{author}</h3>
                  <p>{text}</p>
            </div>
            
      )
};