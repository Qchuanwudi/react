/* 
操作headerTitle数据的 action creator
*/
import {
  SET_HEADER_TITLE
} from '../action-types'

export const setHeaderTitle = (headerTitle) => ({type: SET_HEADER_TITLE, data: headerTitle})