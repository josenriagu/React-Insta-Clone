import React from 'react';
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
                <div className="header-icons">
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
            </nav>
        </header>
    );
}

export default SearchBar;