import React from 'react';
import './CommentSection.css';

const AddComment = ({ changeHandler, submitHandler, commentText }) => {
    return (
        <form className="add-comment" onSubmit={(event) => submitHandler(event)}>
            <input
                type="text"
                placeholder="Add a comment..."
                value={commentText}
                onChange={(event) => changeHandler(event)}
            />
            <div className="post-btn" onClick={(event) => submitHandler(event)} >Post</div>
        </form>
    );
}

export default AddComment;