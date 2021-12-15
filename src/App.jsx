
import React from 'react'
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from './containers/Dashboard/Dashboard';
import { GoogleLogin } from 'react-google-login';

const App = () => {

  const responseGoogle = response => {
    console.log(response);
  };

  return (
    <>

    <GoogleLogin
    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
    buttonText="Log in with Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'} />

    <Router>

      <div>

      <Routes>

        <Route path="/*" element={<Dashboard />} />

      </Routes>
      
      </div>



    </Router>
    </>
  )
  }

export default App
