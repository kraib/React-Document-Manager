/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';
import React from 'react';
import $ from 'teaspoon';
import SearchComponent from 'components/SearchComponent';

describe('SearchComponent', () => {
  it('should render properly',() => {
    $(<SearchComponent/>)
      .render()
      .single('.search-input')
      .tap(collection => {
        collection
          .single('.glyphicon-search')
          .end()
          .single('.glyphicon-volume-down')
          .end()
          .single('.search-main')

      })

  });
});
