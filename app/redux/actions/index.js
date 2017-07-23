
import {
  LOAD_CONVERSION_DATA_STARTED,
  LOAD_CONVERSION_DATA_SUCCESS,
  LOAD_CONVERSION_DATA_FAILURE,
  CURRENCY_SELECTED,
  SET_INPUT_VISIBLITY,
  SET_INR,
} from '../constants/index';
import { BASE_URL, BASE_CURRENCY } from '../constants/index';

function loadConversionData() {
  return {
    type: LOAD_CONVERSION_DATA_STARTED,
  };
}

function loadConversionDataSuccess(data) {
  return {
    type: LOAD_CONVERSION_DATA_SUCCESS,
    payload: data,
  };
}

function loadConversionDataFailure(error) {
  return {
    type: LOAD_CONVERSION_DATA_FAILURE,
    payload: error,
  };
}


export function getCurrencyRates() {
  const url = `${BASE_URL}?base=${BASE_CURRENCY}`;
  return (dispatch) => {
    dispatch(loadConversionData());
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(loadConversionDataSuccess(data)))
    .catch(err => dispatch(loadConversionDataFailure(err)));
  };
}

export function setSelected(currency) {
  return {
    type: CURRENCY_SELECTED,
    payload: currency,
  };
}

export function showInput(flag) {
  return {
    type: SET_INPUT_VISIBLITY,
    payload: flag,
  };
}
export function setInr(rs) {
  return {
    type: SET_INR,
    payload: Number(rs),
  };
}
