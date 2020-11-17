import React from 'react';
import './DetailsMain.css';
import header from '../../../images/images/rectangle13.png'

const DetailsMain = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
        <h2 class="heading">APARTMENT</h2>
        
    </div>
    );
};

export default DetailsMain;