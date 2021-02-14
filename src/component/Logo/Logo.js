import React from 'react';
import logo from '../../assests/Logo.png';
import './Logo.css'
const Logo=(props)=>(
    <div className="Logo" style={{height:props.height}}>
        <img src={logo} alt="BOOKS" />
    </div>
);


export default Logo;