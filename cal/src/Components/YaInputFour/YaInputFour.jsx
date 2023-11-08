import React from 'react'
import { useState } from 'react';

function YaInputFour(props) {
    const [inputFour, setInputFour] = useState({
        name: "",
        email: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputFour((prev) => {
            return {...prev, [name]: value};
        });    
    };

    localStorage.setItem("result7",inputFour.name)
    const result7 = localStorage.getItem('result7')
    localStorage.setItem("result8",inputFour.email)
    const result8 = localStorage.getItem('result8')

    const handlesubmit = (e) => {
        e.preventDefault();
    }; 
  return (
    <>
    <div className="row">
    <div className='col-lg-6 col-sm-12'>
        <form>
            <input placeholder={props.help1} name='name' onChange={handleChange}></input>
        </form>
    </div>
    <div className='col-lg-6 col-sm-12'>
        <form>
            <input placeholder={props.help2} name="email" onChange={handleChange}></input>
        </form>
    </div>
    </div>
    </>
  )
}

export default YaInputFour