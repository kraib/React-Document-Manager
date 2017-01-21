/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
// import createComponent from 'helpers/shallowRenderHelper';

import TopNavComponent from 'components//TopNavComponent.js';

describe('TopNavComponent', () => {
  it('Should have top nav class', () => {
  const instance = TestUtils.renderIntoDocument(
      <TopNavComponent
        onSearchType={() => {}}
      />
    );
    assert.ok(ReactDOM.findDOMNode(instance).className.match(/\btopnav-component\b/));
    })
});
