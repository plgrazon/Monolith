import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from 'react-router-dom';

import Home from './home.jsx';
import Store from './store.jsx'

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return(
      <Router>
        <div>
          <ul>
            <li>
              <NavLink
                to="/"
                exact
                activeStyle={
                  {color: "orange"}
                }
              >Home</NavLink>
            </li>
            <li>
              <NavLink
                to="/store"
                exact
                activeStyle={
                  {color: "orange"}
                }
              >Store</NavLink>
            </li>
          </ul>
          <Route path="/" exact component={Home}/>
          <Route path="/store" exact component={Store}/>
        </div>
      </Router>
    )
  }
}

export default App;
