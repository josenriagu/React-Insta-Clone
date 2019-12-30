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
                            <ProfileThumbnail src="https://scontent-los2-1.cdninstagram.com/v/t51.2885-19/s150x150/73235817_1135752526630248_208376832355991552_n.jpg?_nc_ht=scontent-los2-1.cdninstagram.com&_nc_ohc=ljpnaPwGyHIAX-qNWul&oh=311665ee27b132c93edf584d7bdd1c48&oe=5E8E165C" alt="your profile thumbnail" />
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