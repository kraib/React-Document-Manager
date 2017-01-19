'use strict';

import React from 'react';


const MenuComponent = (props) => (
  <div className="menu-component">
    <nav className="navbar navbar-default">
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            {props.children}
          </ul>
      </div>
    </nav>
  </div>
);

MenuComponent.displayName = 'MenuComponent';

// Uncomment properties you need
// MenuComponent.propTypes = {};
// MenuComponent.defaultProps = {};

export default MenuComponent;
