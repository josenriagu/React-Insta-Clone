import React from 'react';
import './SearchBar.css';

const Icons = ({src}) => {
    return (
        <div className="icon">
            <img src={src} alt="logo" />
        </div>
    );
}

export default Icons;