import {combineReducers} from "redux";
import _ from "lodash";
import {
  SELECTED_ORDER_ITEM,
  SELECTED_ORDER_ITEMS
} from "../actions/types";

const selectedItemsReducer = (state={}, action) => {
  console.log("fire reducer");
  switch(action.type) {
    case SELECTED_ORDER_ITEM:
      console.log("- fire reducer item state");
      return {...state, [action.payload.id]: action.payload};
    case SELECTED_ORDER_ITEMS:
      console.log("- fire reducer items state");
      return {...state,..._.mapKeys(action.payload, "id")};
    default:
      console.log("- fire reducer state");
      return state;
  }
}

export default combineReducers({
  selectedItems: selectedItemsReducer
});
