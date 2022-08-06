import statisticActionTypes from "./statisticActionTypes";
import { combineReducers } from "redux";

const initialState = {
  countryList: [],
  id: "",
  filter: [],
  windowCondition: false,
  error: false,
  loading: false,
};

let getCountryListReducer = (
  state = initialState.countryList,
  { type, payload }
) => {
  switch (type) {
    case statisticActionTypes.GET_STATE:
      return payload;

    case statisticActionTypes.TOGGLE_COUNTRY_SORT:
      let sortedState = state.map((obj) => obj);
      payload.target.value === "Z-A"
        ? sortedState.sort((a, b) =>
            a.Country < b.Country ? 1 : a.Country > b.Country ? -1 : 0
          )
        : sortedState.sort((a, b) =>
            a.Country < b.Country ? -1 : a.Country > b.Country ? 1 : 0
          );

      return sortedState;

    case statisticActionTypes.TOGGLE_NUMBER_SORT:
      let numberSortedState = state.map((obj) => obj);
      payload.target.value === "↓"
        ? numberSortedState.sort((a, b) =>
            a.TotalConfirmed < b.TotalConfirmed
              ? 1
              : a.TotalConfirmed > b.TotalConfirmed
              ? -1
              : 0
          )
        : numberSortedState.sort((a, b) =>
            a.TotalConfirmed < b.TotalConfirmed
              ? -1
              : a.TotalConfirmed > b.TotalConfirmed
              ? 1
              : 0
          );

      return numberSortedState;

    default:
      return state;
  }
};

let getIdReducer = (state = initialState.id, { type, payload }) => {
  switch (type) {
    case statisticActionTypes.GET_ID:
      return payload;

    default:
      return state;
  }
};

let toggleModalReducer = (
  state = initialState.windowCondition,
  { type, payload }
) => {
  switch (type) {
    case statisticActionTypes.TOGGLE_MODAL:
      return payload;

    default:
      return state;
  }
};

let filterReducer = (state = initialState.filter, { type, payload }) => {
  switch (type) {
    case statisticActionTypes.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

let errorReducer = (state = initialState.error, { type, payload }) => {
  switch (type) {
    case statisticActionTypes.ERROR:
      return payload;
    default:
      return state;
  }
};

let loadingReducer = (state = initialState.loading, { type, payload }) => {
  switch (type) {
    case statisticActionTypes.LOADING:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  countryList: getCountryListReducer,
  id: getIdReducer,
  windowCondition: toggleModalReducer,
  filter: filterReducer,
  error: errorReducer,
  loading: loadingReducer,
});
