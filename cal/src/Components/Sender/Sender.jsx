import React from 'react'
import './Sender.css'
import Input from '../Input/Input'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import InputWithLable from '../InputWithLable/InputWithLable'
import { useState } from 'react'
import YaSubmit from '../YaSubmit/YaSubmit'
import YaInputSec from '../YaInputSec/YaInputSec'
import YaInputFour from '../YaInputFour/YaInputFour'

  function Sender(props) {
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
  return (
    <div className="ya-sender-information bg-white">
        <div className="text">
            <h2 className='my-2'>Sender information</h2>
            <p>Enter your payment information to be verified.</p>
            <div className="ya-inputs">
                <Input   help1="Enter your Company Name"    help2="Enter your Address"/>
                <YaInputSec   help1="Enter Sender Full Name"    help2="Enter Sender  ID Number" />
                <InputWithLable  help1="Select"  label="Payment method"   help2="Enter Receipt number " />
                <YaInputFour   help1="Enter amount paid"    help2="Enter contact number " />
            </div> 
        </div>
    </div>
  )
}

export default Sender