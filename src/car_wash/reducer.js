import {
  ADD_NEW_BILL,
  SAVE_BILL,
  EDIT_BILL,
  REMOVE_BILL,
  TOGGLE_CHART,
  UPDATE_BUDGET,
  BILLS_TO_BE_PAID
} from './constants'

import { fetchBillsToBePaid } from './helper';

const defaultState = {
  bills: [],
  displayMode: true,
  currentBill: {},
  sequence: 1,
  showChart: false,
  budget: 50000,
  billsToPaid: [],
  showBillsToPay: false
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_NEW_BILL:
      return {
        ...state,
        displayMode: false,
        currentBill: {}
      };

    case SAVE_BILL: {
      let newBill = state['bills'];
      const currentData = action.data;
      let bills;
      if(!currentData.id) {
        currentData.id = state['sequence'] + 1;
        bills = newBill.concat(currentData);
      } else {
        const index = newBill.map(ele => ele.id ).indexOf(currentData.id);
        newBill[index] = currentData;
        bills = newBill;
      }
      return {
        ...state,
        bills,
        displayMode: true,
        sequence: state['sequence'] + 1
      }
    }

    case EDIT_BILL: {
      return {
        ...state,
        displayMode: false,
        currentBill: action.data
      }
    }

    case REMOVE_BILL: {
      const currentData = action.data;
      const bills = state['bills'].filter(item => item.id !== currentData.id)
      return {
        ...state,
        bills,
        displayMode: true
      }
    }
    
    case TOGGLE_CHART: {
      return {
        ...state,
        showChart: !state['showChart']
      }
    }

    case BILLS_TO_BE_PAID: {
      const list = fetchBillsToBePaid(state['bills'], state['budget']);
      return {
        ...state,
        billsToPaid: list,
        showBillsToPay: true
      }
    }

    case UPDATE_BUDGET: {
      return {
        ...state,
        budget: action.budget
      }
    }

    default:
      return state
  }
}

export { reducer }
