import React from 'react';
import './SearchBar.css';

const Icons = ({ src, updateLike}) => {
    return (
        <div onClick={(event) => updateLike(event)} className="icon">
            <img src={src} alt="icon" />
        </div>
    );
}

export default Icons;