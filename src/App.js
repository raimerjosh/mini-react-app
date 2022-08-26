import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import "./App.css";
import Posts from './components/Posts/Posts';
import SearchBar from './components/Search/SearchBar';
import Filters from './components/Filters/Filters';

// having the highest level component return a router
// prevents url changes from causing page reloads
// Instead, URL changes will allow the Router to determine 
// which of its child components to render while passing 
// along information about the current URL’s path as props.


export default function App () {

  // useEffect(() => {
      //       dispatch(loadPosts())
      // }, [dispatch]);

  return (
    <Router>

      <Route>
        <Header />
        <SearchBar />
      </Route>

      

      <Route exact path='/'>
        <div className='postAndFilterContainer'>
          <Posts pageType='home'/>
          <Filters />
        </div>
      </Route>

      <Route path='/search/:term'>
        <div className='searchAndFilterContainer'>
          <Posts pageType='search'/>
          <Filters />
        </div>
      </Route>

      <Route path='/filters/:term'>
        <div className='searchAndFilterContainer'>
          <Posts pageType='filter'/>
          <Filters />
        </div>
      </Route>

     
    </Router>

      
  )

};

