import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postCity } from '../Redux/City/action';

export default function Cities() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [city, setCity] = useState({
    City: '',
    Country: '',
    Population: ''
  })

  const handleChange = (e) => {
    setCity({
      ...city,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <form>
        <table style={{margin: 'auto'}}>
          <tbody>
            <tr>
              <td><label>Enter City</label></td>
              <td><input type='text' name='City' onChange={handleChange}/></td>
            </tr>
            <tr>
              <td><label>Enter Country</label></td>
              <td><input type='text' name='Country' onChange={handleChange}/></td>
            </tr>
            <tr>
              <td><label>Enter population</label></td>
              <td><input type="number" name='Population' onChange={handleChange}></input></td>
            </tr>
          </tbody>
        </table>
        <button onClick={()=>dispatch(postCity(city), navigate("/"))}>Submit</button>
      </form>
    </div>
  )
}
