import React from 'react';
import Post from './Post';
import './PostContainer.css';

const PostContainer = ({ dummyData, postIcons }) => {
    return (
        <article className="post-container">
            {
                dummyData.map(user => {
                    return (
                        <Post
                            key={user.id}
                            id={user.id}
                            username={user.username}
                            thumbnailUrl={user.thumbnailUrl}
                            imageUrl={user.imageUrl}
                            likes={user.likes}
                            timestamp={user.timestamp}
                            comments={user.comments}
                            postIcons={postIcons}
                        />
                    )
                })
            }
        </article>
    );
}

export default PostContainer;