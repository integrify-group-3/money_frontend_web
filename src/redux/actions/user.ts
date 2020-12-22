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

export function registerSuccess(user: User[]): UserActions {
  return {
    type: REGISTER_SUCCESS,
    payload: user,
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

export const registerUser = ({
  firstName,
  lastName,
  email,
  password,
}: User) => {
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
