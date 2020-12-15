import { Dispatch } from 'redux'
import axios from 'axios'

import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AuthActions,
} from '../../types'


export function loginSuccess(): AuthActions {
  return {
    type: LOGIN_SUCCESS,
    payload: {

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

