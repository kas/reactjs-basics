import React from 'react';

export class Home extends React.Component {
  render() {
    let content = '';
    if (true) {
      content = <p>HELLO!~~~</p>;
    }
    return(
      <div>
        <p>In a new component!</p>
        {content}
      </div>
    );
  }
}
