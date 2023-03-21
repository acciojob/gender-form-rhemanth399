
import React from "react";
import './../styles/App.css';
import {useState} from 'react';
const App = () => {
  const [gender,setGender]=useState('');
  const [sizeMen,setSizeMen]=useState('');
  const [sizeWomen,setSizeWomen]=useState('');

  let genderHandle=(e)=>{
    setGender(e.target.value);
  }
  let sizeMenHandle=(e)=>{
    setSizeMen(e.target.value);
  }
  let sizeWomenHandle=(e)=>{
    setSizeWomen(e.target.value);
  }
  return (
    <div>
        <div>
          <h1>Select your gender</h1>
          <form>
            <label>
              <input type="radio" value='male' checked={gender==='male'} onChange={genderHandle}/>
              Male
            </label>
            <label>
            <input type="radio" value='female' checked={gender==='female'} onChange={genderHandle}/>
            Female
            </label>
               </form>
        </div>
        {gender==='male'&&(
        <div>
          <h1>Select your shirt size</h1>
          <select value={sizeMen} onChange={sizeMenHandle}>
            <option value="">Select a size</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
          </select>
        </div>
        )}
        {gender==='female'&&(
        <div>
          <h1>Select your dress size</h1>
          <select value={sizeWomen} onChange={sizeWomenHandle}>
            <option value="">Select a size</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        )}
    </div>
  )
}

export default App
