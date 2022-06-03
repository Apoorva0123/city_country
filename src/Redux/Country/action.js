//Action types
export const ADD_COUNTRY = "ADD_COUNTRY";

//Action creators
export const addCountry = (data) => {
    return{
        type: ADD_COUNTRY,
        payload: data
    }
}

export const getCountries = () => async(dispatch) => {
    fetch("http://localhost:8080/countries").then(x => x.json()).then(data => {
        dispatch(addCountry(data))
    })
}