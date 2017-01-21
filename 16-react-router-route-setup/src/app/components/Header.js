import React from 'react';

export const Header = (props) => {
  return(
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="dropdown menu" data-dropdown-menu>
          <li className="menu-text">Our Site!</li>
          <li><a href="">Home</a></li>
          <li><a href="">User</a></li>
        </ul>
      </div>
    </div>
  );
}
