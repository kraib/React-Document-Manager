'use strict';

import React from 'react';
import ListItem from './ListItemComponent';



class ListContainerComponent extends React.Component {
  render() {
    return (
      <div className="listcontainer-component">
        <div className="container">
            <div className="card-box">
            <ListItem
              name="Asset Library"
              date="21st February 2013"
              icon="glyphicon-folder-close"
            />
            <ListItem
              name="Marketing Drive"
              date="21st February 2013"
              icon="glyphicon-folder-close"
            />
            <ListItem
              name="Family Reunion"
              date="21st February 2013"
              icon="glyphicon-picture"
            />
            <ListItem
              name="Asset Library"
              date="Vaccation 2015"
              icon="glyphicon-picture"
            />
          </div>
        </div>
      </div>
    );
  }
}

ListContainerComponent.displayName = 'ListContainerComponent';

// Uncomment properties you need
// ListContainerComponent.propTypes = {};
// ListContainerComponent.defaultProps = {};

export default ListContainerComponent;
