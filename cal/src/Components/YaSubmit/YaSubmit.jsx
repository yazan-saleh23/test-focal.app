import React from 'react'
import './YaSubmit.css'
import './../Handlesubmit/Handlesubmit'
function YaSubmit(props) {
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(localStorage)
    };
  return (
    
    <>
    <div className="ya-buttons">
            <button type='submit' className='color-red'>Cancel</button>
            <button type='submit' className='color-white' onClick={handlesubmit}>Confirm Payment</button>
    </div>
    </>
  )
}

export default YaSubmit