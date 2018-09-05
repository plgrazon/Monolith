import React from 'react';

import Home from './home.jsx';
import Store from './store.jsx'

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return(
      <div>
        <nav>
          <a>Home</a>
          <a>Store</a>
        </nav>
        <Home />
        <Store />
      </div>
    )
  }
}

export default App;
