import {
  FETCH_ITEMS,
  CREATE_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
  CHANGE_STATUS,
  CHANGE_DATE,
  CHANGE_MODE
} from '../actions/types';

const initialState = {
  items: [],
  readMode: true,
  itemEdited: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        items: action.payload
      };
    case CREATE_ITEM:
      return {
        ...state,
        items: [action.payload].concat(state.items)
      };
    case CHANGE_STATUS:
      state.items
        .filter(item => item._id === action.payload._id)
        .map(item => (item.isActive = action.payload.isActive));
      return {
        ...state,
        items: [...state.items]
      };
    case CHANGE_DATE:
      state.items
        .filter(item => item._id === action.payload._id)
        .map(item => (item.date = action.payload.date));
      return {
        ...state,
        items: [...state.items]
      };
    case CHANGE_MODE:
      return {
        ...state,
        readMode: action.mode,
        itemEdited: action.id
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      };
    case UPDATE_ITEM:
      state.items
        .filter(item => item._id === action.payload._id)
        .map(item => (item.value = action.payload.value));
      return {
        ...state,
        items: [...state.items]
      };
    default:
      return state;
  }
}
