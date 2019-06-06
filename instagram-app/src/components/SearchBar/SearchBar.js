import React from 'react';
import { Header, HeaderNav, LogoDiv, LogoHeader, LogoImage, LogoText, SearchDiv, SearchInput, IconHolderDiv, IconsDiv } from '../Styles/SearchBarStyles';
import Icons from './Icons';

const SearchBar = ({ searchIcons, value, changeHandler }) => {
    return (
        <Header>
            <HeaderNav>
                <LogoDiv>
                    <LogoHeader>
                        <LogoImage
                            src="/img/icons/instagram.png"
                            alt="logo"
                        />
                    </LogoHeader>
                    <LogoText>
                        <LogoImage src="/img/icons/instagram_logo.png" alt="logo"
                        />
                    </LogoText>
                </LogoDiv>
                <SearchDiv>
                    <SearchInput
                        type="search"
                        placeholder="Search"
                        value={value}
                        onChange={changeHandler}
                    />
                </SearchDiv>
                <IconHolderDiv>
                    <IconsDiv>
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
                    </IconsDiv>
                </IconHolderDiv>
            </HeaderNav>
        </Header>
    );
}

export default SearchBar;