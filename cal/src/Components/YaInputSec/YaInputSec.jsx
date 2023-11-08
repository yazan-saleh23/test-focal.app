import React from 'react'
import { useState } from 'react';

function YaInputSec(props) {

    const [qq, setQq] = useState({
        name: "",
        email: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setQq((prev) => {
            return {...prev, [name]: value};
        });    
    };
    localStorage.setItem("result3",qq.name)
    const result3 = localStorage.getItem('result3')
    localStorage.setItem("result4",qq.email)
    const result4 = localStorage.getItem('result4')
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

export default YaInputSec