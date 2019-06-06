import React from 'react';
import { IconDiv } from '../Styles/SearchBarStyles';

const likedSrc = "/img/icons/like_alt.png";

const Icons = ({ id, likeStatus, src, name, updateLike }) => {
    if (name === "like") {
        return (
            <IconDiv
                id={id}
                onClick={(event) => updateLike(event)}
            >
                <img src={likeStatus ? likedSrc : src} alt="icon" />
            </IconDiv>
        );
    }
    return (
        <IconDiv
            id={id}
        >
            <img src={src} alt="icon" />
        </IconDiv>
    );
}

export default Icons;