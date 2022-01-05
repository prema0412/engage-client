
import React from 'react';
import Logout from '../Logout/Logout';
import './Profile.scss';

const Profile = (props) => {

  const { currentUserProfile } = props;

  return (
    <>
      <div className='profile'>
        <p className='profile__name'>{currentUserProfile.name}</p>
        <img className="profile__image" src={currentUserProfile.imageUrl} alt='userImage' />
        <Logout className="profile__logout" />
      </div>

    </>

  )
}

export default Profile
