import React from 'react';
import { render } from 'react-dom'

class App extends React.Component {
  render() {
    return( // can only return 1 ROOT element (in this case we return 1 div)
      <div className=''>
        <h1>Hello!</h1>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById('app'));
