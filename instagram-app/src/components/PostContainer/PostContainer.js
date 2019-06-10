import React from 'react';
import { PostContainerDiv } from '../Styles/PostContainerStyles';
import Post from './Post';

const PostContainer = ({ searchString, postData, postIcons, addComment, addLike, deleteComment }) => {
    return (
        <PostContainerDiv>
            {
                postData.filter(user => user.username.includes(searchString)).map(user => {
                    return (
                        <Post
                            key={user.id}
                            id={user.id}
                            username={user.username}
                            thumbnailUrl={user.thumbnailUrl}
                            imageUrl={user.imageUrl}
                            likes={user.likes}
                            likeStatus={user.likeStatus}
                            timestamp={user.timestamp}
                            comments={user.comments}
                            postIcons={postIcons}
                            addComment={addComment}
                            addLike={addLike}
                            deleteComment={deleteComment}
                        />
                    );
                })
            }
        </PostContainerDiv>
    );
}

export default PostContainer;