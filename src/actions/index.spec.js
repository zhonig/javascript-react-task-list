import * as actions from './index'

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(actions.addTodo('Use Redux')).toEqual({
      type: 'ADD_TODO',
      id: 0,
      text: 'Use Redux'
    })
  })

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter('active')).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'active'
    })
  })

  it('toggleTodo should create TOGGLE_TODO action', () => {
    expect(actions.toggleTodo(1)).toEqual({
      type: 'TOGGLE_TODO',
      id: 1
    })
  })

  it('removeTodo should create REMOVE_TODO action', () => {
    expect(actions.removeTodo(1)).toEqual({
      type: 'REMOVE_TODO',
      id: 1
    })
  })

  it('clearTodo should create CLEAR_TODO action', () => {
    expect(actions.clearTodo()).toEqual({
      type: 'CLEAR_TODO'
    })
  })

})