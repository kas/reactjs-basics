import React from 'react';

import { Header } from './Header';

export class Root extends React.Component {
  render() {
    return(
      <div>
        <div className="row">
          <div className="small-10 columns">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="small-10 columns">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
