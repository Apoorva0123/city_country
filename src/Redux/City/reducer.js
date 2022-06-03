import { ADD_CITY } from './action';

const init = {cities: []}
export const cityReducer = (store=init, {type,payload}) => {
  switch(type){
    case ADD_CITY:
      return {...store, cities: payload}
    default:
      return store
  }
}
