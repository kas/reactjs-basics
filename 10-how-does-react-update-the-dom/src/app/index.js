import React from 'react';
import { render } from 'react-dom'

import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {
  render() {
    return( // can only return 1 ROOT element (in this case we return 1 div)
      <div>
        <div className='row'>
          <div className='small-12 columns'>
            <Header/>
          </div>
        </div>

        <div className='row'>
          <div className='small-12 columns'>
            <Home name={'Ken'} initialAge={20}/>
          </div>
        </div>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById('app'));
