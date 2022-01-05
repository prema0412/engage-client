
import React from 'react';
import { GoogleLogout } from 'react-google-login';



const Logout = (props) => {

  const { currentUser, setCurrentUser, currentUserProfile, setCurrentUserProfile } = props;
  const onSuccess = () => {
    const userProfile = {};
    console.log('Logout made successfully');
    setCurrentUser("");
    userProfile.name = "";
    userProfile.imageUrl = "";
    setCurrentUserProfile(userProfile);

  };

  return (
    <div>
      <GoogleLogout
        clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        style={{ Top: '5px', Right: '500px', padding: '5px' }}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;