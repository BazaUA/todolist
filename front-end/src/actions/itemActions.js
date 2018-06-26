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
        done: item.isDone
      })
    })
      .then(function (response) {
        response.json().then(body => {
          dispatch(addItemSuccess(body));
          toastr.success("Added successful");
        });
      })
      .catch(error => {
        toastr.error("Something went wrong!");
        throw (error);
      });
  };
}

export function deleteItemSuccess(itemId) {
  return {type: types.DELETE_ITEM_SUCCESS, itemId};
}

export function deleteItem(itemId) {
  return function (dispatch) {
    const url = 'http://localhost:8080/api/item/' + itemId;
    fetch(url, {
      credentials: 'same-origin',
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'dataType': 'json'
      }
    })
      .then(response => {
        dispatch(deleteItemSuccess(itemId));
        toastr.success("Deleted successful");
      })
      .catch(error => {
        toastr.error("Something went wrong!");
        throw (error);
      });
  };
}

export function doneItemSuccess(itemId) {
  return {type: types.SET_DONE_SUCCESS, itemId};
}

export function doneItem(itemId) {
  return function (dispatch) {
    const url = 'http://localhost:8080/api/done';
    fetch(url, {
      credentials: 'same-origin',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'dataType': 'json'
      },
      body: JSON.stringify({
        id: itemId,
      })
    })
      .then(response => {
        dispatch(addItemSuccess(body));
        toastr.success("Done successful");
      })
      .catch(error => {
        toastr.error("Something went wrong!");
        throw (error);
      });
  };
}

export function undoneItemSuccess(itemId) {
  return {type: types.SET_UNDONE_SUCCESS, itemId};
}

export function undoneItem(itemId) {
  return function (dispatch) {
    const url = 'http://localhost:8080/api/undone';
    fetch(url, {
      credentials: 'same-origin',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'dataType': 'json'
      },
      body: JSON.stringify({
        id: itemId,
      })
    })
      .then(response => {
        dispatch(addItemSuccess(itemId));
        toastr.success("Undone successful");
      })
      .catch(error => {
        toastr.error("Something went wrong!");
        throw (error);
      });
  };
}


