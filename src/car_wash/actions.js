import {
  ADD_NEW_BILL,
  SAVE_BILL,
  REMOVE_BILL,
  EDIT_BILL,
  TOGGLE_CHART,
  BILLS_TO_BE_PAID,
  UPDATE_BUDGET
} from './constants'

export const addNewBill = issuesList => ({
  type: ADD_NEW_BILL,
  issuesList
})

export const saveBill = data => ({
  type: SAVE_BILL,
  data
})

export const editBill = data => ({
  type: EDIT_BILL,
  data
})

export const removeItem = data => ({
  type: REMOVE_BILL,
  data
})

export const toggleChart = _ => ({
  type: TOGGLE_CHART
})

export const billsToBePaid = _ => ({
  type: BILLS_TO_BE_PAID
})

export const updateBudget = budget => ({
  type: UPDATE_BUDGET,
  budget
})