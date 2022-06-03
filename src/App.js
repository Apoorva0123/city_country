import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Countries from './Components/Countries';
import Cities from './Components/Cities';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/add-country' element = {<Countries/>}></Route>
        <Route path='/add-city' element = {<Cities/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
