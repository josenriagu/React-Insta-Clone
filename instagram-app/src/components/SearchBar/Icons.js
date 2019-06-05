import React from 'react';
import './SearchBar.css';

const Icons = ({src}) => {
    return (
        <div className="icon">
            <img src={src} alt="icon" />
        </div>
    );
}

export default Icons;