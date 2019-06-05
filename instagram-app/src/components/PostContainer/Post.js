import React, { Component } from 'react';
import Icons from '../SearchBar/Icons';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

export default class Post extends Component {
    updateLike = () => {
        this.props.addLike(this.props.id)
    }
    render() {
        const { id, username, likes, timestamp, comments, thumbnailUrl, imageUrl, postIcons, addComment } = this.props
        return (
            <div id={id} className="post">
                <div className="post-head">
                    <div className="left">
                        <div className="profile-thumbnail small">
                            <img src={thumbnailUrl} alt="profile thumbnail" />
                        </div>
                        <div className="profile-details username"><strong>{username}</strong></div>
                    </div>
                    <div className="right"><strong>∙ ∙ ∙</strong></div>
                </div>
                <div className="post-image">
                    <img src={imageUrl} alt="post" />
                </div>
                <div className="post-body">
                    <div className="post-interaction">
                        <div className="icons">
                            {
                                postIcons.map(icon => {
                                    return (
                                        <Icons
                                            key={icon.id}
                                            id={id}
                                            name={icon.name}
                                            src={icon.src}
                                            updateLike={this.updateLike}
                                        />
                                    );
                                })
                            }
                        </div>
                        <p><strong>{likes} likes</strong></p>
                    </div>
                </div>
                <CommentSection
                    id={id}
                    comments={comments}
                    timestamp={timestamp}
                    addComment={addComment}
                />
            </div>
        );
    }
}