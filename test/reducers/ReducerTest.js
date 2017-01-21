import documents,{initialData} from '../../src/reducers/documents'
import search,{initialData as initialSearch} from '../../src/reducers/search'
import * as types from '../../src/actions/types'

describe('documents reducer',() => {
  it('should return default data' ,()=>{
    assert.deepEqual( documents(undefined, {}), initialData)
  });

});

describe('search reducer',() => {

  it('should return default data' ,()=>{
    assert.deepEqual( search(undefined, {}), initialSearch)
  });

  it('should update search' ,()=>{
    const action={
      type: types.UPDATE_SEARCH,
      payload:'search'
    };
    assert.deepEqual( search(initialSearch, action), {q:action.payload})
  });
});

