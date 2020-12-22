import {
  UserState,
  LOGIN_SUCCESS,
  UserActions,
  REGISTER_SUCCESS,
} from '../../types'

export default function auth(
  state: UserState = {
    user: {},
    token: '',
    isAuthenticated: false,
    error: '',
  },
  action: UserActions
): UserState {
  switch (action.type) {
  case LOGIN_SUCCESS:
    return {
      ...state,
    }
  case REGISTER_SUCCESS:
    return {
      ...state,
      user: action.payload,
      isAuthenticated: true,
      error: '',
    }
  default:
    return state
  }
}
