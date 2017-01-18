'use strict';

import React from 'react';
import Search from './SearchComponent'
import Menu from './MenuComponent'
require('styles//TopNav.css');

class TopNavComponent extends React.Component {
  render() {
    return (
      <div className="topnav-components">
        <div className="container top-nav">
          <Search/>
        </div>
        <div className="container bottom-nav">
          <div className="storage-status pull-right">
            <span className="amount-used">
              1GB OF 15GB USED
            </span>
            <span className="description-text">
              UPGRADE STORAGE
            </span>
          </div>
          <Menu>
            <li><a href="#">Test</a></li>
          </Menu>
        </div>

      </div>
    );
  }
}

TopNavComponent.displayName = 'TopNavComponent';

// Uncomment properties you need
// TopNavComponent.propTypes = {};
// TopNavComponent.defaultProps = {};

export default TopNavComponent;
