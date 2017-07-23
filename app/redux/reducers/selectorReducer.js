/**
 *  Imports
 */

 import {
   CURRENCY_SELECTED,
 } from '../constants/index';

/** Initial State  */
const INITIAL_STATE = {  selectedCurrency: 'RUB' }

export default function(state = INITIAL_STATE, action)
{
  switch(action.type) {
    case CURRENCY_SELECTED:
      return { ...state, selectedCurrency: action.payload };
    default:
        return state;
  }

}
