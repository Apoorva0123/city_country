import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
  } from "redux";

import {cityReducer} from "./City/reducer";
import {countryReducer} from './Country/reducer'; 
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    country: countryReducer,
    city: cityReducer
})

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );

