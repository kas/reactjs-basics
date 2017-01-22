import React from 'react';
import { Link } from 'react-router';

export const Header = (props) => {
  return(
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="dropdown menu" data-dropdown-menu>
          <li className="menu-text">Our Site!</li>
          <li><Link to={'/home'} activeStyle={{color: 'red'}}>Home</Link></li>
          <li><Link to={'/user/10'} activeClassName={'active'}>User</Link></li>
        </ul>
      </div>
    </div>
  );
}
