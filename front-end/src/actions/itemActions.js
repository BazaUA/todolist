import axios from 'axios';
import * as types from './actionTypes';
import toastr from 'toastr';

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
    const url = 'http://localhost:8080/api/item';
    fetch(url, {
      credentials: 'same-origin',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'dataType': 'json'
      },
      body: JSON.stringify({
        id: item.id,
        name: item.name,
        description: item.description,
        date: item.date,
        done : item.isDone
      })
    })
      .then(response => {
        console.log(response);
        dispatch(addItemSuccess(item));
        toastr.success("Added successful");
      })
      .catch(error => {
        throw (error);
      });

    // axios.put(url, { "newItem": item })
    //   .then((response) => {
    //     dispatch(addItemSuccess(response));
    //   })
    //   .catch((error) => {
    //     throw (error);
    //   });
  };
}
