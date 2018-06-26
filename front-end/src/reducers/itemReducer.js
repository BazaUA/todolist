import * as types from '../actions/actionTypes';
import initialState from './initState';

export default function itemReducer(state = initialState.items, action) {
  switch (action.type) {
    case types.CREATE_ITEM_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.item)
      ];
    case types.DELETE_ITEM_SUCCESS:
      return ;

    case types.LOAD_ITEMS_SUCCESS:
      return action.items;

    case types.SET_DONE_SUCCESS:
      return;

    case types.SET_UNDONE_SUCCESS:
      return ;

    default:
      return state;

  }
}
