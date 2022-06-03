//Action types

import axios from "axios";

export const ADD_CITY = "ADD_CITY";

//Action creators

export const addCity = (data) => {
    return {
        type: ADD_CITY,
        payload: data
    }
}

export const postCity = (city) => async(dispatch) => {
    axios.post('http://localhost:8080/cities',city)
    console.log(city)
}

export const getCities = () => async(dispatch) => {
    axios.get('http://localhost:8080/cities')
    .then(function(e){
        console.log(e.data);
        dispatch(addCity(e.data))
    })
}

export const deleteCity = (id) => async(dispatch) => {
    axios.delete(`http://localhost:8080/cities/${id}`)
    .then(function(){
        dispatch(getCities())
    })
}
