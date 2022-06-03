import { ADD_COUNTRY } from "./action"

const init = {countries: []};


export const countryReducer = (store = init, {type, payload}) => {
  switch(type){
      case ADD_COUNTRY:
          return {...store, countries: payload};
      default:
          return store;
  }
}
