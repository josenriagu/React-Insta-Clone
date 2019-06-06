import React from 'react';

const ProfileSection = props => {
    const username = JSON.parse(localStorage.getItem("username"))
    return (
        <aside className="profile-section">
            <div className="left">
                <div className="profile-thumbnail">
                    {
                        (username === "thedrflynn")
                            ? 
                            <img src="https://scontent-los2-1.cdninstagram.com/vp/69f1ccde7a7e4a26e051822e0f230774/5D9D491E/t51.2885-19/s150x150/56358356_232738404265808_6854026862427897856_n.jpg?_nc_ht=scontent-los2-1.cdninstagram.com" alt="your profile thumbnail" />
                            :
                            <img src="/img/icons/placeholder.jpg" alt="user profile thumbnail" />
                    }
                    }
                </div>
                <div className="profile-details">
                    <div className="username"><strong>{username}</strong></div>
                    
                        {
                            (username === "thedrflynn")
                                ?
                            <div className="name">JosemariaNriagu</div>
                                :
                            <div className="name">RandomUser</div>
                        }
                        
                </div>
            </div>
        </aside>
    );
}

export default ProfileSection;