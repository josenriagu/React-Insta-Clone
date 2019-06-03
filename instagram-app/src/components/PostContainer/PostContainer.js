import React from 'react';
import Icons from '../SearchBar/Icons';
import './PostContainer.css';

const PostContainer = props => {
    return (
        <article className="post-container">
            <div className="post">
                <div className="post-head">
                    <div className="profile-image">
                        <img src="#" alt="mini profile" />
                    </div>
                    <div className="username">Philzcofee</div>
                </div>
                <div className="post-image">
                    <img src="#" alt="post" />
                </div>
                <Icons />
            </div>
        </article>
    );
}

export default PostContainer;