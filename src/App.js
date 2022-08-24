import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import "./App.css";
import Posts from './components/Posts/Posts';
import { Provider } from 'react-redux';
import SearchBar from './components/Search/SearchBar';

// having the highest level component return a router
// prevents url changes from causing page reloads
// Instead, URL changes will allow the Router to determine 
// which of its child components to render while passing 
// along information about the current URL’s path as props.


export default function App () {

  return (
    <Router>
      <Route>
        <Header />
      </Route>

      <Route>
        <SearchBar />
      </Route>

      <Route exact path='/'>
        <Posts />
      </Route>

      <Route path='/search:term'>
        <Posts />
      </Route>

    </Router>

      
  )

};

