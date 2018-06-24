import axios from 'axios';
import * as types from './actionTypes';

export function loadItemsSuccess(items) {
  return {type: types.LOAD_ITEMS_SUCCESS, items};
}

export function loadItems() {
  return function (dispatch) {
    const url = 'http://localhost:8080/api/items';
    axios.get(url)
      .then((items) => {
        dispatch(loadItemsSuccess());
      })
      .catch((error) => {
        throw(error);
      });
  };
}
