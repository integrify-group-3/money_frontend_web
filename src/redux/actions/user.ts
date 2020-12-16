import { Dispatch } from 'redux'

import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  UserActions,
  User,
  REGISTER_SUCCESS,
} from '../../types'

/* import { showErrors, clearErrors } from './error'
 */
export function loginFail(): UserActions {
  return {
    type: LOGIN_FAIL,
  }
}
export function loginSuccess(user: User, token: string): UserActions {
  return {
    type: LOGIN_SUCCESS,
    payload: {},
  }
}

export function registerSuccess(user: User, token: string): UserActions {
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
