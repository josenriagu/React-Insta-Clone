import React from 'react';
import { AddCommentForm, AddCommentInput, PostBtnDiv } from '../Styles/CommentSectionStyles';
import './CommentSection.css';

const AddComment = ({ changeHandler, submitHandler, commentText }) => {
    return (
        <AddCommentForm onSubmit={(event) => submitHandler(event)}>
            <AddCommentInput
                type="text"
                placeholder="Add a comment..."
                value={commentText}
                onChange={(event) => changeHandler(event)}
            />
            <PostBtnDiv onClick={(event) => submitHandler(event)} >Post</PostBtnDiv>
        </AddCommentForm>
    );
}

export default AddComment;