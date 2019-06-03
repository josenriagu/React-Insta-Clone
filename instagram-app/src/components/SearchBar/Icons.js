import React from 'react';
import './SearchBar.css';

const Icons = props => {
    return (
        <div className="icon-holder">
            <div className="icon">
                <img src="/img/icons/explore.png" alt="logo" />
            </div>
            <div className="icon">
                <img src="/img/icons/like.png" alt="logo" />
            </div>
            <div className="icon">
                <img src="/img/icons/user.png" alt="logo" />
            </div>
        </div>
    );
}

export default Icons;