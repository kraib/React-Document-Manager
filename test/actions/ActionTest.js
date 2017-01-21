import * as actions from '../../src/actions'
import * as types from '../../src/actions/types'

describe('actions', () => {
  it('should update search', () => {
    const text = 'pics'
    const expectedAction = {
      type: types.UPDATE_SEARCH,
      payload:text
    }
    assert.deepEqual(actions.updateSearch(text),expectedAction)
  })
})
