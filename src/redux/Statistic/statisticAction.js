import statisticActionTypes from "./statisticActionTypes";

let getState = (state) => ({
  type: statisticActionTypes.GET_STATE,
  payload: state,
});

let getId = (number) => ({
  type: statisticActionTypes.GET_ID,
  payload: number,
});

let toggleModal = (bool) => ({
  type: statisticActionTypes.TOGGLE_MODAL,
  payload: bool,
});

let sortAZ = (bool) => ({
  type: statisticActionTypes.TOGGLE_COUNTRY_SORT,
  payload: bool,
});

let sortNumber = (bool) => ({
  type: statisticActionTypes.TOGGLE_NUMBER_SORT,
  payload: bool,
});

let changeFilter = (filter) => ({
  type: statisticActionTypes.CHANGE_FILTER,
  payload: filter,
});

let loading = (bool) => ({
  type: statisticActionTypes.LOADING,
  payload: bool,
});

let error = (bool) => ({
  type: statisticActionTypes.ERROR,
  payload: bool,
});

let actionsTypes = {
  getState,
  getId,
  toggleModal,
  sortAZ,
  sortNumber,
  changeFilter,
  error,
  loading,
};

export default actionsTypes;
