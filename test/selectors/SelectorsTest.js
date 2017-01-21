import Immutable from 'seamless-immutable';
import {searchedDocuments,allDocumentsSelector,search} from '../../src/selectors'

describe('selectors', () => {
  const state = {search:{q:'asset'},documents:Immutable.from([
    {
      id:1,
      name: 'Asset Library',
      date: '21st February 2013',
      url: 'none',
      type: 'folder'
    },
    {
      id:2,
      name: 'Marketing Drive',
      date: '21st February 2013',
      url: 'none',
      type: 'folder'
    },
    {
      id:3,
      name: 'Family Reunion',
      date: '21st February 2013',
      url: 'none',
      type: 'image'
    },
    {
      id:4,
      name: 'Vacation Kalangala',
      date: '21st February 2013',
      url: 'none',
      type: 'image'
    }

  ])};
  it('it should search', () => {
    assert.deepEqual(searchedDocuments.resultFunc(state.documents,state.search), [state.documents[0]]);
  });
  it('it should all documents', () => {
    assert.deepEqual(allDocumentsSelector(state), state.documents);
  });
  it('it should show search', () => {
    assert.deepEqual(search(state), state.search);
  })
})
