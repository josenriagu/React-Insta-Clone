import React from 'react';
import Icons from './Icons';
import './SearchBar.css';

const SearchBar = ({searchIcons, value, changeHandler}) => {
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
                    <input
                        type="search"
                        placeholder="Search"
                        value={value}
                        onChange={changeHandler}
                    />
                </div>
                <div className="icon-holder">
                    <div className="icons">
                        {
                            searchIcons.map(icon => {
                                return (
                                    <Icons
                                    key={icon.id}
                                    src={icon.src}
                                    />
                                );
                            })
                        }
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default SearchBar;