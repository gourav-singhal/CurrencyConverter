/**
 *  Imports
 */

 import {
   LOAD_CONVERSION_DATA_STARTED,
   LOAD_CONVERSION_DATA_SUCCESS,
   LOAD_CONVERSION_DATA_FAILURE,
   SET_INPUT_VISIBLITY,
   SET_INR,
 } from '../constants/index';

/** Initial State  */
const INITIAL_STATE = {  conversionData: {}, loading: true, isInputShown: false, indianRs: 1 }

export default function(state = INITIAL_STATE, action)
{
  switch(action.type) {
    case LOAD_CONVERSION_DATA_STARTED:
      return { ...state, loading: true, isInputShown: false };
    case LOAD_CONVERSION_DATA_SUCCESS:
      return { ...state, conversionData: action.payload.rates, loading: false, isInputShown: false };
    case LOAD_CONVERSION_DATA_FAILURE:
      return { ...state, loading: false, isInputShown: false };
    case SET_INPUT_VISIBLITY:
      return { ...state, loading: false, isInputShown: action.payload }
    case SET_INR:
        return { ...state, loading: false, isInputShown: false, indianRs: action.payload }
    default:
        return state;
  }

}
