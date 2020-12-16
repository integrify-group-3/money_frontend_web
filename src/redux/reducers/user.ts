import { User, UserState, LOGIN_SUCCESS, UserActions } from '../../types'

export default function auth(
  state: UserState = {
    user: {} as User,
    token: '',
  },
  action: UserActions
): UserState {
  switch (action.type) {
  case LOGIN_SUCCESS:
    return {
      ...state,
    }
  default:
    return state
  }
}
