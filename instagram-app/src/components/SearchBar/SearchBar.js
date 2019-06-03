import React from 'react';
import Icons from './Icons';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <header className="search-bar">
            <nav className="header-nav">
                <div className="logo">
                    <div className="icon logo-image">
                        <img src="/img/icons/instagram.png" alt="logo" />
                    </div>
                    <div className="logo-text">
                        <img src="/img/icons/instagram_logo.png" alt="logo" />
                    </div>
                </div>
                <div className="search">
                    <input type="Search" placeholder="Search" />
                </div>
                <Icons />
            </nav>
        </header>
    );
}

export default SearchBar;