/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import React from 'react';
import $ from 'teaspoon';

import MenuComponent from 'components//MenuComponent.js';

describe('MenuComponent', () => {
  it('should render properly',() => {
    $(<MenuComponent/>)
      .render()
      .single('.menu-component')
      .tap(collection => {
        collection
          .single('.navbar')
      })

  });

  it('should render child li',() => {
    $(<MenuComponent>
      <li>Test</li>
      </MenuComponent>
      )
      .render()
      .find('ul')
      .single('li')

  });
});
