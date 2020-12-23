import { combineReducers } from 'redux'

import product from './product'
import ui from './ui'
import user from './user'
import error from './error'

const createRootReducer = () =>
  combineReducers({
    product,
    ui,
    user,
    error
  })

export default createRootReducer
