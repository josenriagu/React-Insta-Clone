import React, { Component } from 'react';
import { PostDiv, PostHeadDiv, LeftDiv, RightDiv, ProfileThumbnailDiv, ProfileThumbnail, ProfileDetailsDiv, PostImageDiv, PostBodyDiv, PostInteractionDiv } from '../Styles/PostContainerStyles';
import { IconsDiv } from '../Styles/SearchBarStyles';
import Icons from '../SearchBar/Icons';
import CommentSection from '../CommentSection/CommentSection';

export default class Post extends Component {
    updateLike = () => {
        this.props.addLike(this.props.id)
    }
    render() {
        const { id, username, likes, likeStatus, timestamp, comments, thumbnailUrl, imageUrl, postIcons, addComment, deleteComment } = this.props
        return (
            <PostDiv id={id}>
                <PostHeadDiv>
                    <LeftDiv>
                        <ProfileThumbnailDiv small>
                            <ProfileThumbnail src={thumbnailUrl} alt="profile thumbnail" />
                        </ProfileThumbnailDiv>
                        <ProfileDetailsDiv username><strong>{username}</strong></ProfileDetailsDiv>
                    </LeftDiv>
                    <RightDiv><strong>∙ ∙ ∙</strong></RightDiv>
                </PostHeadDiv>
                <PostImageDiv>
                    <img src={imageUrl} alt="post" />
                </PostImageDiv>
                <PostBodyDiv>
                    <PostInteractionDiv>
                        <IconsDiv>
                            {
                                postIcons.map(icon => {
                                    return (
                                        <Icons
                                            key={icon.id}
                                            id={id}
                                            likeStatus={likeStatus}
                                            name={icon.name}
                                            src={icon.src}
                                            updateLike={this.updateLike}
                                        />
                                    );
                                })
                            }
                        </IconsDiv>
                        <p><strong>{likes} likes</strong></p>
                    </PostInteractionDiv>
                </PostBodyDiv>
                <CommentSection
                    id={id}
                    comments={comments}
                    timestamp={timestamp}
                    addComment={addComment}
                    deleteComment={deleteComment}
                />
            </PostDiv>
        );
    }
}