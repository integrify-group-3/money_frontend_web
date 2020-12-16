import { Dispatch } from 'redux'

import { LOGIN_SUCCESS, AuthActions, REGISTER_SUCCESS } from '../../types'

export function loginSuccess(): AuthActions {
  return {
    type: LOGIN_SUCCESS,
    payload: {},
  }
}

export function registerSuccess(): AuthActions {
  return {
    type: REGISTER_SUCCESS,
    payload: {},
  }
}

export function loginUser({ email, password }: any) {
  return async (dispatch: Dispatch) => {
    try {
      console.log('connected to actions', email, password)
    } catch (err) {
      console.log(err)
    }
  }
}

export function registerUser({ firstName, lastName, email, password }: any) {
  return async (dispatch: Dispatch) => {
    try {
      console.log('connected to actions', firstName, lastName, email, password)
    } catch (err) {
      console.log(err)
    }
  }
}
