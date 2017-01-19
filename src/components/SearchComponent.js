'use strict';

import React from 'react';

require('styles//Search.css');

class SearchComponent extends React.Component {
  render() {
    return (
      <div className="search-input col-lg-offset-2 col-md-8">
        <i className="glyphicon glyphicon-search pull-left"></i>
        <input type="text" placeholder="Search" className="col-md-10 search-main"/>
        <i className="glyphicon glyphicon-volume-down pull-right"></i>
      </div>
    );
  }
}

SearchComponent.displayName = 'SearchComponent';

// Uncomment properties you need
// SearchComponent.propTypes = {};
// SearchComponent.defaultProps = {};

export default SearchComponent;
