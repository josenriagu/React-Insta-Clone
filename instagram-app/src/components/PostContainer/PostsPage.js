import React from 'react';
import { PostsPageDiv, Main } from '../Styles/PostContainerStyles';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import ProfileSection from '../ProfileSection/ProfileSection';

const PostsPage = ({ value, changeHandler, searchIcons, searchString, postData, postIcons, addComment, addLike, deleteComment }) => {
    return (
        <PostsPageDiv>
            <SearchBar
                value={value}
                changeHandler={changeHandler}
                searchIcons={searchIcons}
            />
            <Main>
                <PostContainer
                    searchString={searchString}
                    postData={postData}
                    postIcons={postIcons}
                    addComment={addComment}
                    addLike={addLike}
                    deleteComment={deleteComment}
                />
                <ProfileSection />
            </Main>
        </PostsPageDiv>
    );
}

export default PostsPage;