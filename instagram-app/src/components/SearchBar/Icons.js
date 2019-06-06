import React from 'react';
import './SearchBar.css';

const likedSrc = "/img/icons/like_alt.png";

const Icons = ({ id, likeStatus, src, name, updateLike }) => {
    if (name === "like") {
        return (
            <div
                id={id}
                className="icon"
                onClick={(event) => updateLike(event)}
            >
                <img src={likeStatus ? likedSrc : src} alt="icon" />
            </div>)
    }
    return (
        <div
            id={id}            
            className="icon"
        >
            <img src={src} alt="icon" />
        </div>
    );
}

export default Icons;