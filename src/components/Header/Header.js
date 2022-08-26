import { React } from 'react';
import { useHistory } from 'react-router-dom';

export default function Header() {

      const history = useHistory();

      const handleClick = () => {
            history.push('/');
      }
      
      return (
            <div className='headerContainer'>
              <div className='logoContainer'>
								<img 
                	src='../../reddit-logo.jpg' 
                	alt='logo'
                	className='img'
                  onClick={handleClick}/>
							
              	<p className='logoName'>Mini Reddit</p>
							</div>
              <select>{/* //turn into menu icon later */}</select>
            </div>
      )
};


