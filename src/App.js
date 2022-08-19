import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import "./App.css";

// having the highest level component return a router
// prevents url changes from causing page reloads
// Instead, URL changes will allow the Router to determine 
// which of its child components to render while passing 
// along information about the current URL’s path as props.

export default function App () {
  return (
    <Router>
      <Route>
        <Header/>
      </Route>
    </Router>
  )

};

