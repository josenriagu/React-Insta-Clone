import React, { Component } from 'react';
import moment from 'moment';
import { CommentSectionDiv, PostTimeDiv, PostFooterDiv } from '../Styles/CommentSectionStyles';
import Comment from './Comment';
import AddComment from '../CommentSection/AddComment';

export default class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: this.props.comments,
            commentText: ""
        }
    }

    changeHandler = event => {
        this.setState({ ...this.state, commentText: event.target.value });
    }

    submitHandler = event => {
        event.preventDefault();
        if (this.state.commentText.length !== 0) {
            this.props.addComment(this.props.id, this.state.commentText)
            this.setState({ ...this.state, commentText: "" })
        }
    }

    render() {
        const { id, timestamp, comments, deleteComment } = this.props;
        // tweaks with moment.js library
        // let dt = moment(timestamp, ["MMMM Do YYYY, h:mm:ss a"]).format("HH:mm");
        // let dtt =moment().startOf(timestamp).fromNow();
        let new_timestamp = moment(timestamp, "MMMM Do YYYY, h:mm:ss a").fromNow();
        return (
            <CommentSectionDiv id={id}>
                {
                    comments.map(comment => {
                        return (
                            <Comment
                                key={comment.id}
                                id={comment.id}
                                postId={id}
                                username={comment.username}
                                text={comment.text}
                                deleteComment={deleteComment}
                            />
                        );
                    })
                }
                <PostTimeDiv>{new_timestamp}</PostTimeDiv>
                <PostFooterDiv>
                    <AddComment
                        changeHandler={this.changeHandler}
                        submitHandler={this.submitHandler}
                        commentText={this.state.commentText}
                    />
                </PostFooterDiv>
            </CommentSectionDiv>

        );
    }
}