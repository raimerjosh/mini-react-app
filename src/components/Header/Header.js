import { React } from 'react';

export default function Header() {

      return (
            <div className='headerContainer'>
              <div className='logoContainer'>
								<img 
                	src='../../reddit-logo.jpg' 
                	alt='logo'
                	className='img'/>
							
              	<p className='logoName'>Mini Reddit</p>
							</div>
              <select>{/* //turn into menu icon later */}</select>
            </div>
      )
};


