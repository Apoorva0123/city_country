import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getCountries} from '../Redux/Country/action';
import { getCities } from '../Redux/City/action';
import { deleteCity } from '../Redux/City/action';
//import { store } from '../Redux/store';

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const country = useSelector((store) => store.country.countries);
  const city = useSelector((store) => store.city.cities);
  console.log(city);

  const handleAddCountry = () => {
    navigate("/add-country");
  }

  const handleAddCity = () => {
    navigate("/add-city");
  }

  useEffect(()=>{
    dispatch(getCountries())
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(() => {
    dispatch(getCities())
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div style={{"display": 'flex', justifyContent: 'space-around', flexDirection: 'column', maxWidth: '500px',margin: 'auto',gap: '1rem'}}>
      <button onClick={handleAddCountry}>Add Country</button>
      <table border='1'>
        <thead>
          <th>S.No</th>
          <th>Country</th>
        </thead>
        <tbody>
          {country.map((e) => 
            <tr>
              <td>{e.id}</td>
              <td>{e.title}</td>
            </tr>
          )}
        </tbody>
      </table>
      <button onClick={handleAddCity}>Add City</button>
      <table border='1'>
        <thead>
          <th>id</th>
          <th>Country</th>
          <th>City</th>
          <th>Population</th>
          <th>Delete</th>
        </thead>
        <tbody>
          {city.map((e) => 
            <tr>
              <td>{e.id}</td>
              <td>{e.Country}</td>
              <td>{e.City}</td>
              <td>{e.Population}</td>
              <td><button onClick={() => {
                dispatch(deleteCity(e.id))
              }}>Delete</button></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
