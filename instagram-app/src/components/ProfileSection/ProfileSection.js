import React from 'react';
import { ProfileSectionAside, LeftDiv, ProfileThumbnailDiv, ProfileThumbnail, ProfileDetailsDiv, UsernameDiv, ProfileNameDiv } from '../Styles/PostContainerStyles';

const ProfileSection = props => {
    const username = JSON.parse(localStorage.getItem("username"))
    return (
        <ProfileSectionAside>
            <LeftDiv>
                <ProfileThumbnailDiv>
                    {
                        (username === "thedrflynn")
                            ?
                            <ProfileThumbnail src="https://scontent-los2-1.cdninstagram.com/vp/69f1ccde7a7e4a26e051822e0f230774/5D9D491E/t51.2885-19/s150x150/56358356_232738404265808_6854026862427897856_n.jpg?_nc_ht=scontent-los2-1.cdninstagram.com" alt="your profile thumbnail" />
                            :
                            <ProfileThumbnail src="/img/icons/placeholder.jpg" alt="user profile thumbnail" />
                    }
                    }
                </ProfileThumbnailDiv>
                <ProfileDetailsDiv>
                    <UsernameDiv><strong>{username}</strong></UsernameDiv>

                    {
                        (username === "thedrflynn")
                            ?
                            <ProfileNameDiv>JosemariaNriagu</ProfileNameDiv>
                            :
                            <ProfileNameDiv>RandomUser</ProfileNameDiv>
                    }

                </ProfileDetailsDiv>
            </LeftDiv>
        </ProfileSectionAside>
    );
}

export default ProfileSection;