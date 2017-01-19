/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import React from 'react';
import $ from 'teaspoon';

import StripComponent from 'components//StripComponent.js';

describe('StripComponent', () => {

  it('Should Have a New Button', () => {
    $(<StripComponent />)
      .render()
      .find('.btn')
      .text()
      .should.equal('New')
  });

  it('Should Render Right Icons', () => {
    $(<StripComponent />)
      .render()
      .find('.right-icons')
      .single('.glyphicon-info-sign')
      .end()
      .single('.glyphicon-cog')
  });
});
