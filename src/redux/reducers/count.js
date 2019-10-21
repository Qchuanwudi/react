import {
    DECREEMENT,
    INCREEMENT

}from '../action-types'

const initCount = 1
export default function count (state=initCount, action) {
  
switch (action.type) {
  case INCREEMENT:
    return this.state + action.data
    case DECREEMENT:
      return state - action.data
  default:
    return state
}

}