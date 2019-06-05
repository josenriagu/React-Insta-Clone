import React from 'react';
import './SearchBar.css';

const Icons = ({ src, name, updateLike }) => {
    if (name === "like") {
        return (
            <div
                className="icon"
                onClick={(event) => updateLike(event)}
            >
                <img src={src} alt="icon" />
            </div>)
    }
    return (
        <div
            className="icon"
        >
            <img src={src} alt="icon" />
        </div>
    );
}

export default Icons;