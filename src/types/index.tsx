// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'

//user action types
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const SHOW_ERRORS = 'SHOW_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'
export const REGISTER_FAIL = 'REGISTER_FAIL'

// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

// A product
export type Product = {
  id: string
  name: string
  price: number
}

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type UiActions = ToggleDialogAction

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction

export type ProductState = {
  inCart: Product[]
}

// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}
export type User = {
  firstName: string
  lastName: string
  email: string
  password: string
}

export type LoginUserFailAction = {
  type: typeof LOGIN_FAIL
}

export type RegisterFailAction = {
  type: typeof REGISTER_FAIL
  payload: {
    user: User
  }
}

export type LoginUserSuccessAction = {
  type: typeof LOGIN_SUCCESS
  payload: {}
}

export type RegisterUserSuccessAction = {
  type: typeof REGISTER_SUCCESS
  payload: {}
}

export type UserActions =
  | LoginUserFailAction
  | LoginUserSuccessAction
  | RegisterUserSuccessAction
  | RegisterFailAction

export type ShowErrorAction = {
  type: typeof SHOW_ERRORS
  payload: {
    msg: string
    status?: number
  }
}

export type ClearErrorAction = {
  type: typeof CLEAR_ERRORS
}

export type ErrorActions = ShowErrorAction | ClearErrorAction

export type UserState = {
  user: User | any
  token: string
  isAuthenticated?: boolean
  error: string
}

export type AppState = {
  product: ProductState
  ui: UiState
  user: UserState
}
