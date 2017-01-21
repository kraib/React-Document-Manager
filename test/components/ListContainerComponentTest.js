/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
'use strict';
import React from 'react';
import $ from 'teaspoon';
import ListContainer from 'components/ListContainerComponent';
import ListItem from 'components/ListItemComponent';
import {initialData} from '../../src/reducers/documents';

describe('ListContainerComponent', () => {
  it('should render card', () => {
    $(<ListContainer
        documents={initialData}
      />)
      .render()
      .find('.container')
      .single('.card-box')
  });

  it('should render list items', () => {
  const numberOfItems = $(<ListContainer
      documents={initialData}
    />)
      .render()
      .find($.s(ListItem))
      .length;
    assert.deepEqual(numberOfItems,initialData.length);
  });

});
