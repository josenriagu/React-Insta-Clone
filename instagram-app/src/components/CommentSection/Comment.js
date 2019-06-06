import React, { Component } from 'react';
import { CommentDiv, DeleteButton, DeleteButtonImage } from '../Styles/CommentSectionStyles';

export default class Comment extends Component {
    deleteHandler = event => {
        event.preventDefault();
        this.props.deleteComment(this.props.postId, this.props.id)
    }
    render() {
        const { id, username, text } = this.props;
        const style = { display: (username === JSON.parse(localStorage.getItem("username"))) ? "initial" : "none" }
        return (
            <CommentDiv id={id}>
                <p><strong>{username} </strong>{text}</p>
                <DeleteButton style={style} onClick={event => this.deleteHandler(event)}>
                    <DeleteButtonImage src="/img/icons/delete.png" alt="delete" />
                </DeleteButton>
            </CommentDiv>
        );
    }
}