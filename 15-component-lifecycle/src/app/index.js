import React from 'react';
import { render } from 'react-dom'

import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      homeLink: 'Home',
      homeMounted: true
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

  onChangeHomeMounted() {
    this.setState({
      homeMounted: !this.state.homeMounted
    });
  }

  render() {
    let homeComponent = '';

    if (this.state.homeMounted) {
      homeComponent = (
        <Home
          name={'Ken'}
          initialAge={20}
          greet={this.onGreet}
          changeLinkName={(newName) => this.onChangeLinkName(newName)}
          initialLinkName={this.state.homeLink}
        />
      );
    }

    return( // can only return 1 ROOT element (in this case we return 1 div)
      <div>
        <div className='row'>
          <div className='small-12 columns'>
            <Header homeLink={this.state.homeLink}/>
          </div>
        </div>

        <div className='row'>
          <div className='small-12 columns'>
            {homeComponent}
          </div>
        </div>

        <div className='row'>
          <div className='small-12 columns'>
            <button onClick={() => this.onChangeHomeMounted()} className='button'>(Un)mount Home Component</button>
          </div>
        </div>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById('app'));
