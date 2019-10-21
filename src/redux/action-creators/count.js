import {
  DECREEMENT,
  INCREEMENT
} from '../action-types'



export const increment = (number) =>({type:INCREEMENT, data: number
}) 

export const increment = (number) =>({type:DECREEMENT, data: number
}) 

export const incrementAsync = (number,delayTime) =>{

return dispatch =>{
setTimeout(() => {

dispatch(increment(number))

}, timeout);

}

}