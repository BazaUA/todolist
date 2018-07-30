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
  console.log(item);
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
        name: item.name,
        date: item.date,
        done: item.done
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
    const url = 'http://localhost:8080/api/done/'+itemId;
    fetch(url, {
      credentials: 'same-origin',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'dataType': 'json'
      }
    })
      .then(response => {
        //dispatch();
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
    const url = 'http://localhost:8080/api/undone/'+itemId;
    fetch(url, {
      credentials: 'same-origin',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'dataType': 'json'
      }
    })
      .then(response => {
        //dispatch();
        toastr.success("Undone successful");
      })
      .catch(error => {
        toastr.error("Something went wrong!");
        throw (error);
      });
  };
}


