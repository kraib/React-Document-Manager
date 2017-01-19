'use strict';

import React from 'react';

class StripComponent extends React.Component {
  render() {
    return (
      <div className="strip-component">
        <div className="container">
          <a href="#" className="btn btn-danger pull-left">New</a>
          <div className="pull-right right-icons">
            <i className="glyphicon glyphicon-info-sign"></i>
            <i className="glyphicon glyphicon-cog"></i>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    );
  }
}

StripComponent.displayName = 'StripComponent';

// Uncomment properties you need
// StripComponent.propTypes = {};
// StripComponent.defaultProps = {};

export default StripComponent;
