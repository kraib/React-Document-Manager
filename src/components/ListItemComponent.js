'use strict';

import React from 'react';

class ListItemComponent extends React.Component {
  render() {
    const {icon,name,date } = this.props;
    return (
      <div className="listitem-component">
        <span className="icon">
          <i className={`glyphicon ${icon}`}></i>
        </span>
        <span className="name">
          {name}
          <span className="date">
          {date}
          </span>
        </span>
        <div className="clearfix"></div>


      </div>
    );
  }
}

ListItemComponent.displayName = 'ListItemComponent';

// Uncomment properties you need
// ListItemComponent.propTypes = {};
// ListItemComponent.defaultProps = {};

export default ListItemComponent;
