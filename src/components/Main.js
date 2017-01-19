require('normalize.css/normalize.css');
require('bootstrap/dist/css/bootstrap.css');
require('styles/App.scss');

import React from 'react';
import TopNav from './TopNavComponent'
import Strip from './StripComponent'
import ListContainer from './ListContainerComponent'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <TopNav/>
        <Strip/>
        <ListContainer/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
