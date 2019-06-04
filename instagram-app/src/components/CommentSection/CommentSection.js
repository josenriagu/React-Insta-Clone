import React, { Component } from 'react';
import moment from 'moment';
import Comment from './Comment';
import AddComment from '../CommentSection/AddComment';
import './CommentSection.css';

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
        console.log("sfgsg")
    }

    submitHandler = event => {
        event.preventDefault();
        this.props.addComment(this.props.id, this.state.commentText)
        this.setState({ ...this.state, commentText: "" })
    }

    render() {
        const { id, timestamp, comments } = this.props;
        // tweaks with moment.js library
        // let dt = moment(timestamp, ["MMMM Do YYYY, h:mm:ss a"]).format("HH:mm");
        // let dtt =moment().startOf(timestamp).fromNow();
        let new_timestamp = moment(timestamp, "MMMM Do YYYY, h:mm:ss a").fromNow();
        return (
            <div id={id} className="comment-section">
                {
                    comments.map(comment => {
                        return (
                            <Comment
                                id={comment.id}
                                username={comment.username}
                                text={comment.text}
                            />
                        );
                    })
                }
                <div className="post-time">{new_timestamp}</div>
                <div className="post-footer">
                    <AddComment
                        changeHandler={this.changeHandler}
                        submitHandler={this.submitHandler}
                        commentText={this.state.commentText}
                    />
                </div>
            </div>

        );
    }
}