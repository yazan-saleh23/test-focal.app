import React from 'react';
import './YaIcon.css'
import { Link } from 'react-router-dom';


function YaIcon() {
  return (
    <>
    <Link to='/' >
        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='yaIcon'>
            <line x1="1" y1="-1" x2="11.364" y2="-1" transform="matrix(-0.68565 -0.727932 -0.74159 0.670854 8.47754 18)" stroke="#938C8C" stroke-width="2" stroke-linecap="round"/>
            <line x1="1" y1="-1" x2="11.364" y2="-1" transform="matrix(-0.68565 0.727931 -0.74159 -0.670854 8.47754 0)" stroke="#938C8C" stroke-width="2" stroke-linecap="round"/>
        </svg>
    </Link>
    
    </>
  )
}

export default YaIcon;