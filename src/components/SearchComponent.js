'use strict';

import React from 'react';

require('styles//Search.css');

class SearchComponent extends React.Component {
  render() {
    return (
      <div className="search-input">
        <i className="glyphicon glyphicon-search"></i>
        <input type="text" className="search-main"/>
        <i className="glyphicon glyphicon-volume-down"></i>
      </div>
    );
  }
}

SearchComponent.displayName = 'SearchComponent';

// Uncomment properties you need
// SearchComponent.propTypes = {};
// SearchComponent.defaultProps = {};

export default SearchComponent;
