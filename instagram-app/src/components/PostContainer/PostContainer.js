import React from 'react';
import Post from './Post';
import './PostContainer.css';

const PostContainer = ({ postData, postIcons, searchString, addComment }) => {
    return (
        <article className="post-container">
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
                            timestamp={user.timestamp}
                            comments={user.comments}
                            postIcons={postIcons}
                            addComment={addComment}
                        />
                    )
                })
            }
        </article>
    );
}

export default PostContainer;