import Immutable from 'seamless-immutable';
import {searchedDocuments,allDocumentsSelector} from '../../src/selectors'

describe('selectors', () => {
  const documents = Immutable.from([
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

  ]);
  it('it should search', () => {
    const text = 'asset';
    assert(searchedDocuments.resultFunc(documents,text), [documents[0]]);
  })
})
