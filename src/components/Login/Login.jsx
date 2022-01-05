import React from 'react';
import Logout from '../Logout/Logout';

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../../utils/refreshToken';


const Login = (props) => {

  const { currentUser, setCurrentUser, currentUserProfile, setCurrentUserProfile } = props;


  const onSuccess = (res) => {
    const userProfile = {};
    console.log('Login Success: currentUser:', res.profileObj);
    setCurrentUser(res.profileObj.email);
    userProfile.name = res.profileObj.name;
    userProfile.imageUrl = res.profileObj.imageUrl;
    setCurrentUserProfile(userProfile);
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '5px', padding: '5px' }}
        isSignedIn={true}
      />


    </div>
  );
}

export default Login;