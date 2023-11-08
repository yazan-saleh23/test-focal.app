import React from 'react'
import './YaSlect.css'
import { useState } from 'react';

function YaSlect() {

    const [formInput, setFormInput] = useState({
        email: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormInput((prev) => {
            return {...prev, [name]: value};
        });    
    };

    localStorage.setItem("result5",formInput.name)
    const result5 = localStorage.getItem('result5')

  return (
    <select name='name' id='cars' onChange={handleChange}>
        <option disabled="disabled" selected="selected">select</option>
        <option value="Syriatel Cash">Syriatel Cash</option>
        <option value="Bemo Bank">Bemo Bank</option>
    </select>
    
  )
}

export default YaSlect