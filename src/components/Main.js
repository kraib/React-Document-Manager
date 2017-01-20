require('normalize.css/normalize.css');
require('bootstrap/dist/css/bootstrap.css');
require('styles/App.scss');

import React from 'react';
import {connect} from 'react-redux';
import TopNav from './TopNavComponent';
import Strip from './StripComponent';
import {allDocumentsSelector} from '../selectors';
import {createSelector} from 'reselect';
import ListContainer from './ListContainerComponent';

const mapStateToProps = createSelector(
  [allDocumentsSelector],
  (documents) => ({
    documents
  }));
@connect(mapStateToProps)
class AppComponent extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <TopNav/>
        <Strip/>
        <ListContainer
          documents={this.props.documents}
        />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
