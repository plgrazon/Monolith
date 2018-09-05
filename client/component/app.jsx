import React from 'react';
import {
  BrowserRouter as Router,
  Route,
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
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/store">Store</Link>
            </li>
          </ul>
          <Route path="/home" component={Home}/>
          <Route path="/store" component={Store}/>
        </div>
      </Router>
    )
  }
}

export default App;
