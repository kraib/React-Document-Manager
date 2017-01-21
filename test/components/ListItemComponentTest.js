/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import React from 'react';
import $ from 'teaspoon';
import ListItemComponent from 'components//ListItemComponent.js';

describe('ListItemComponent', () => {
  it('Should Render Well',() => {
    $(<ListItemComponent/>)
      .render()
      .find('.listitem-component')
      .single('.icon')
      .end()
      .single('.name')
      .end()
      .single('.date')
      .end()
  });
});


