import React from 'react';
import moment from 'moment';
import Icons from '../SearchBar/Icons';
import CommentSection from '../CommentSection/CommentSection';
import AddComment from '../CommentSection/AddComment';
import './PostContainer.css';

const Post = props => {
    const { id, username, likes, timestamp, comments,thumbnailUrl, imageUrl, postIcons } = props;
    // tweaks with moment.js library
    // let dt = moment(timestamp, ["MMMM Do YYYY, h:mm:ss a"]).format("HH:mm");
    // let dtt =moment().startOf(timestamp).fromNow();
    let new_timestamp = moment(timestamp, "MMMM Do YYYY, h:mm:ss a").fromNow();
    return (
        <div id={id} className="post">
            <div className="post-head">
                <div className="left">
                    <div className="profile-thumbnail">
                        <img src={thumbnailUrl} alt="profile thumbnail" />
                    </div>
                    <div className="username"><strong>{username}</strong></div>
                </div>
                <div className="right"><strong>. . .</strong></div>
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
                                    src={icon.src}
                                    />
                                );
                            })
                        }
                    </div>
                    <p><strong>{likes} likes</strong></p>
                </div>
                {
                    comments.map(comment => {
                        return (
                            <CommentSection
                                key={comment.id}
                                id={comment.id}
                                username={comment.username}
                                text={comment.text}
                            />
                        );
                    })
                }
                <div className="post-time">{new_timestamp}</div>
            </div>
            <div className="post-footer">
                <AddComment />
            </div>
        </div>
    );
}

export default Post;