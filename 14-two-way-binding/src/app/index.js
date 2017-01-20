import React from 'react';
import { render } from 'react-dom'

import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      homeLink: 'Home'
    };
  }

  onGreet() {
    alert('Hello!');
  }

  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName
    });
  }

  render() {
    return( // can only return 1 ROOT element (in this case we return 1 div)
      <div>
        <div className='row'>
          <div className='small-12 columns'>
            <Header homeLink={this.state.homeLink}/>
          </div>
        </div>

        <div className='row'>
          <div className='small-12 columns'>
            <Home
              name={'Ken'}
              initialAge={20}
              greet={this.onGreet}
              changeLinkName={(newName) => this.onChangeLinkName(newName)}
              initialLinkName={this.state.homeLink}
              />
          </div>
        </div>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById('app'));
