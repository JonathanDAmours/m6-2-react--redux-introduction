import React from "react";

const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: state[action.item.id]
            ? state[action.item.id].quantity + 1
            : 1,
        },
      };
    }
    case "REMOVE_ITEM": {
      const newState = {
        ...state,
      };
      delete newState[action.item.id];
      return newState;
    }
    case "UPDATE_QUANTITY": {
      return {
        ...state,
        [action.item.id]: {
          ...state[action.item.id],
          quantity: action.item.quantity,
        },
      };
    }
    default:
      return state;
  }
}

export const getStoreItemArray = (state) => Object.values(state);
