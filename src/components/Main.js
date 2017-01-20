require('normalize.css/normalize.css');
require('bootstrap/dist/css/bootstrap.css');
require('styles/App.scss');

import React from 'react';
import {connect} from 'react-redux';
import TopNav from './TopNavComponent';
import Strip from './StripComponent';
import {searchedDocuments} from '../selectors';
import {createSelector} from 'reselect';
import ListContainer from './ListContainerComponent';
import * as actions from '../actions'
const mapStateToProps = createSelector(
  [searchedDocuments],
  (documents) => ({
    documents
  }));
@connect(mapStateToProps)
class AppComponent extends React.Component {
  onSearchType(event){
    this.props.dispatch(actions.updateSearch(event.target.value.toLowerCase() ));
  }
  render() {
    return (
      <div className="wrapper">
        <TopNav
          onSearchType={this.onSearchType.bind(this)}
        />
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
