require('normalize.css/normalize.css');
require('bootstrap/dist/css/bootstrap.css');
require('styles/App.scss');

import React from 'react';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import TopNav from './TopNavComponent';
import Strip from './StripComponent';
import {searchedDocuments} from '../selectors';
import ListContainer from './ListContainerComponent';
import * as actions from '../actions'
const mapStateToProps = createSelector(
  [searchedDocuments],
  (documents) => ({
    documents
  }));

export class AppComponent extends React.Component {
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

export default connect(mapStateToProps)(AppComponent)
