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
        dispatch(loadItemsSuccess(items.data));
      })
      .catch((error) => {
        throw(error);
      });
  };
}

export function addItemSuccess(item) {
  return {type: types.CREATE_ITEM_SUCCESS, item};
}

export function addItem(item) {
  return function (dispatch) {
    console.log(item);
    const url = 'http://localhost:8080/api/item';
    //const itemToJson = JSON.stringify(item);

    axios.put(url, { "newItem": item })
      .then((response) => {
        dispatch(addItemSuccess(response));
      })
      .catch((error) => {
        throw (error);
      });
  };
}
