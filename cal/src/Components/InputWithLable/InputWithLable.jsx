import React from 'react'
import './InputWithLable.css'
import YaSlect from '../YaSlect/YaSlect'
import { useState } from 'react';
function InputWithLable(props) {

    const [inputthree, setInputthree] = useState({
        name: "",
        email: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputthree((prev) => {
            return {...prev, [name]: value};
        });    
    };

    localStorage.setItem("result6",inputthree.email)
    const result6 = localStorage.getItem('result6')

    

  return (
    <>
    <div className="row">
        <div className='col-lg-6 col-sm-12'>
            <form>
                <label >{props.label}</label> 
                <form id='d-flex' name='name'>
                <YaSlect />
                </form>
            </form>
        </div>
        <div className='col-lg-6 col-sm-12'>
            <form>
            <input placeholder={props.help2} name='email' onChange={handleChange}></input>
            </form>
        </div>
    </div>
    
    </>
    )
}

export default InputWithLable