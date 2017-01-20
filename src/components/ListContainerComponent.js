'use strict';

import React from 'react';
import ListItem from './ListItemComponent';

class ListContainerComponent extends React.Component {

  renderListItem(document){
    return(
      <ListItem
        key={document.id}
        name={document.name}
        date={document.date}
        icon={document.type === 'folder' ? 'glyphicon-folder-close' :'glyphicon-picture'}
      />
    )
  }
  render(){
    const mappedDocuments = this.props.documents.map(document => this.renderListItem(document))
    return (
      <div className="listcontainer-component">
        <div className="container">
            <div className="card-box">
              {mappedDocuments}
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
