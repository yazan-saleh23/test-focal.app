import React from 'react'
import './Input.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { useState } from 'react'
import YaSubmit from '../YaSubmit/YaSubmit'

function Input(props) {
    const [details, setDetails] = useState({
        name: "",
        email: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setDetails((prev) => {
            return {...prev, [name]: value};
        });    
    };

    localStorage.setItem("result1",details.name)
    const result1 = localStorage.getItem('result1')
    localStorage.setItem("result2",details.email)
    const result2 = localStorage.getItem('result2')

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

export default Input


