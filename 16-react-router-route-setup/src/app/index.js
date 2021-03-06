import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import { Root } from './components/Root';
import { Home } from './components/Home';
import { User } from './components/User';

class App extends React.Component {
  render() {
    return( // can only return 1 ROOT element (in this case we return 1 div)
      <Router history={browserHistory}>
        <Route path={'/'} component={Root}>
          <IndexRoute component={Home}/>
          <Route path={'user'} component={User}/>
          <Route path={'home'} component={Home}/>
        </Route>
      </Router>
    );
  }
}

render(<App/>, window.document.getElementById('app'));
