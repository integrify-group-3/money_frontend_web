import { Dispatch } from 'redux'
import axios from 'axios'

import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  UserActions,
  User
} from '../../types'

import {
  showErrors,
  clearErrors
} from './error'

export function loginFail(): UserActions {
  return {
    type: LOGIN_FAIL
  }
}
export function loginSuccess(user: User, token: string): UserActions {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      user,
      token
    }
  }
}
export function loginUser ({ email, password}: any) {
  return async (dispatch: Dispatch) => {
    try {
      console.log('connected to actions', email, password)
    }
    catch(err) {
      console.log(err)
    }
  }
}

