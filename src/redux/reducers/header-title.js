/*
管理xxx数据reducer

*/
import {
  SET_HEADER_TITLE
} from '../action-types'

const initheaderTitle = '首页'
export default function headerTitle(state=initheaderTitle,action) {
  
switch (action.type) {
  case SET_HEADER_TITLE:
    return action.data

  default:
    return state
}

}