import {
  FETCH_ITEMS,
  CREATE_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
  CHANGE_STATUS,
  CHANGE_DATE,
  CHANGE_MODE
} from './types';

export const fetchItems = items => dispatch => {
  fetch('/api/items', {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(items => {
      dispatch({
        type: FETCH_ITEMS,
        payload: items
      });
    })
    .catch(err => console.log(err.message));
};

export const createItem = item => dispatch => {
  fetch('/api/items', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(item)
  })
    .then(res => res.json())
    .then(item =>
      dispatch({
        type: CREATE_ITEM,
        payload: item
      })
    )
    .catch(err => console.log(err.message));
};

export const changeStatus = item => dispatch => {
  fetch(`/api/items/${item._id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(item)
  })
    .then(res => res.json())
    .then(item =>
      dispatch({
        type: CHANGE_STATUS,
        payload: item
      })
    )
    .catch(err => console.log(err.message));
};

export const changeDate = item => dispatch => {
  fetch(`/api/items/${item._id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(item)
  })
    .then(res => res.json())
    .then(item =>
      dispatch({
        type: CHANGE_DATE,
        payload: item
      })
    )
    .catch(err => console.log(err.message));
};

export const changeMode = (id, mode) => dispatch => {
  dispatch({
    type: CHANGE_MODE,
    id: id,
    mode: mode
  });
};

export const deleteItem = id => dispatch => {
  fetch(`/api/items/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(() =>
      dispatch({
        type: DELETE_ITEM,
        payload: id
      })
    )
    .catch(err => console.log(err.message));
};

export const updateItem = item => dispatch => {
  fetch(`/api/items/${item._id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(item)
  })
    .then(res => res.json())
    .then(item =>
      dispatch({
        type: UPDATE_ITEM,
        payload: item
      })
    )
    .catch(err => console.log(err.message));
};
