import { Dispatch } from 'redux'
import axios from 'axios'
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  UserActions,
  User,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../../types'

/* import { showErrors, clearErrors } from './error'
 */
export function loginFail(): UserActions {
  return {
    type: LOGIN_FAIL,
  }
}

export function registerFail(error: UserActions) {
  return {
    type: REGISTER_FAIL,
    payload: error,
  }
}

export function loginSuccess(user: User): UserActions {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  }
}

export function registerSuccess(user: User): UserActions {
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

export const registerUser = ({ firstName, lastName, email, password }: any) => {
  return (dispatch: Dispatch) => {
    axios
      .post('http://localhost:8000/api/v1/users', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      })
      .then((response) => {
        const users = response.data
        dispatch(registerSuccess(users))
        /*         window.location.href = '/login'
         */
      })
      .catch((error) => {
        dispatch(registerFail(error.message))
      })
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
