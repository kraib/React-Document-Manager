'use strict';

import React from 'react';
import Search from './SearchComponent'
import Menu from './MenuComponent'

class TopNavComponent extends React.Component {
  render() {
    return (
      <div className="topnav-component">
        <div className="top-nav">
          <div className="container">
            <Search/>
          </div>
        </div>
        <div className="bottom-nav">
          <div className="container">
            <div className="logo-area ">
              <div className="logo pull-left">
                <h3>Documents</h3>

              </div>
              <div className="storage-status pull-right">
                <span className="amount-used">
                  1GB OF 15GB USED
                </span>
                <span className="description-text">
                  UPGRADE STORAGE
                </span>
              </div>
            <div className="clearfix"></div>
            </div>

            <Menu>
              <li className="active"><a href="#"><i className="glyphicon glyphicon-folder-open"></i> Documents</a></li>
              <li><a href="#"><i className="glyphicon glyphicon-picture"></i> Pictures</a></li>
              <li><a href="#"><i className="glyphicon glyphicon-star"></i> Stared</a></li>
              <li><a href="#"><i className="glyphicon glyphicon-trash"></i> Trash</a></li>
            </Menu>
          </div>
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
