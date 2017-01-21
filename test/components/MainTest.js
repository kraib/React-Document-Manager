/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;
import React from 'react';
import $ from 'teaspoon';
import ConnectedMain, {AppComponent as Main} from 'components/Main';
import TopNavComponent from 'components/TopNavComponent.js';
import ListContainer from 'components/ListContainerComponent';
import Strip from 'components/StripComponent';
import store from 'stores';
import {Provider} from 'react-redux';


describe('MainComponent', () => {
  it('should render connected main', () => {
    $(<Provider store={store}>
        <ConnectedMain/>
      </Provider>
      )
      .render()
      .single($.s(ConnectedMain))
  });

  it('should render wrapper class', () => {
    $(<Main/>)
      .shallowRender()
      .single('.wrapper')
  });

  it('should render properly', () => {
    $(<Main/>)
      .shallowRender()
      .find('.wrapper')
      .single($.s(TopNavComponent))
      .end()
      .single($.s(ListContainer))
      .end()
      .single($.s(Strip))

  });

});
