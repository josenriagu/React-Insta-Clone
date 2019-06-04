import React from 'react';
import './CommentSection.css';

const CommentSection = ({ id, username, text }) => {
    
    return (
        <div id={id} className="comment">
            <p><strong>{username} </strong>{text} <span>more</span></p>
        </div>
        
    );
}

export default CommentSection;