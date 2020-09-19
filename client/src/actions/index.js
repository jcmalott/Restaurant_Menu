import meals from "../apis/meals";
import {
  SELECTED_ORDER_ITEM,
  SELECTED_ORDER_ITEMS
} from "../actions/types";

export const fetchMealItem = (items, id) => async dispatch => {
  console.log("fire fetch item");
  console.log("items: " + items);
  console.log("Items id:" + id);
  const response = await meals.get(`/${items}/${id}`);

console.log("Response: ", response.data);
  dispatch({type: SELECTED_ORDER_ITEM, payload: response.data});
}

export const fetchMealItems = (items) => async dispatch => {
  console.log("fire fetch items");
  const response = await meals.get(`/${items}`);

  dispatch({type: SELECTED_ORDER_ITEMS, payload: response.data});
}
