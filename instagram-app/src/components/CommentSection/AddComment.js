import React from 'react';
import './CommentSection.css';

const AddComment = props => {
    return (
        <div className="add-comment">
            <input type="text" placeholder="Add a comment..." />
            <div className="post-btn">Post</div>
        </div>
    );
}

export default AddComment;