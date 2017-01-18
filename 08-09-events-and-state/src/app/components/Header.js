import React from 'react';

export class Header extends React.Component {
  render() {
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text">Home</li>
          </ul>
        </div>
      </div>
    );
  }
}
