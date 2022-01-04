
import React from 'react';
import { GoogleLogout } from 'react-google-login';



const Logout = () => {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        style={{ marginTop: '5px', padding: '5px' }}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;