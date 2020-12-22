import { Dispatch } from 'redux'
import axios from 'axios'

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
  return async (dispatch: Dispatch, getState: any) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        }
      }
      const body = JSON.stringify({ email, password})
      tokenConfig(getState)
      const url = 'http://localhost:3000/api/v1/user/login'
      const res = await axios.post(url, body, config)
      console.log(config)
      console.log(res)
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

export const tokenConfig = (getState: any) => {
  //gets the token from localstorage
  // const token = getState().user.token
  const token = localStorage.getItem('token')
  console.log('token here', token)
  const config = {
    headers: {
      'Content-type': 'application/json',
      'x-auth-token': '',
    },
  }
  if (token) {
    config.headers['x-auth-token'] = token
  }
  return config
}
