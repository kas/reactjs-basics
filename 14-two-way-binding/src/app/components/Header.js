import React from 'react';

export const Header = (props) => {
  return(
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="dropdown menu" data-dropdown-menu>
          <li className="menu-text"><a href=''>{props.homeLink}</a></li>
        </ul>
      </div>
    </div>
  );
}
