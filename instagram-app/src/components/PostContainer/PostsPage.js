import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import ProfileSection from '../ProfileSection/ProfileSection';

const PostsPage = ({value, changeHandler, searchIcons, searchString, postData, postIcons, addComment, addLike, deleteComment }) => {
    return (
        <div className="posts-page">
            <SearchBar
                value={value}
                changeHandler={changeHandler}
                searchIcons={searchIcons}
            />
            <main className="main">
                <PostContainer
                    searchString={searchString}
                    postData={postData}
                    postIcons={postIcons}
                    addComment={addComment}
                    addLike={addLike}
                    deleteComment={deleteComment}
                />
                <ProfileSection />
            </main> 
        </div>
    );
}

export default PostsPage;