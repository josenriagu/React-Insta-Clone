import React, { Component } from 'react';
import './CommentSection.css';

export default class Comment extends Component {
    deleteHandler = event => {
        event.preventDefault();
        this.props.deleteComment(this.props.postId, this.props.id)
    }
    render() {
        const { id, username, text } = this.props;
        return (
            <div id={id} className="comment">
                <p><strong>{username} </strong>{text}</p>
                <button onClick={event => this.deleteHandler(event)}>x</button>
            </div>
        );
    }
}