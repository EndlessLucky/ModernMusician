import React, { useState, useContext, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { AuthState } from '@aws-amplify/ui-components';
import { AmplifyAuthenticator, AmplifySignOut, AmplifySignUp} from '@aws-amplify/ui-react';
import Amplify, { Auth } from 'aws-amplify';
import { useNavigate } from "react-router-dom";
import awsconfig from '../aws-exports';
import { UserContext } from '../component/SecureViewContext';

// var updatedConfig = awsconfig;
// const currentUrl = window.location.href;
// const redirectUrl = currentUrl.split('/').slice(0, 3).join('/') + '/login/';
// updatedConfig.oauth.redirectSignIn = redirectUrl;
// updatedConfig.oauth.redirectSignOut = redirectUrl;
Amplify.configure(awsconfig);

export default function Authenticate () {
  const [showSignupForm, setShowSignupForm] = useState(false);
  const context = useContext(UserContext);
  const navigate = useNavigate();

  console.log('context - ', context);

  useEffect(() => {
    console.log('##### - ', context.authState);
    if(context.authState === AuthState.SignedIn && context.userId){
      console.log('@@@@@@ - ', context.authState);
      navigate('/tiers');
    }
  }, [context.authState]);

  const registerClick = () =>{
    navigate('/tiers', {state: {authStatus: 'register'}});
  }

  const loginClick = () =>{
    navigate('/tiers', {state: {authStatus: 'login'}});
  }

  return context.authState === AuthState.SignedIn && context.userId ?(
    <>
      <AmplifySignOut />
    </>
  ) : (
    <React.Fragment>
    {!showSignupForm && (
      <div className='container-85 m-auto' style={{'paddingTop': '100px'}}>
        <h1 className='text-white font-face-om text-center font-60'>
          Get Your Free NFT
        </h1>
        <h3 className='text-white font-face-om font-40 text-center'>
          From Cue No Ego
        </h3>
        
        <div className='d-flex mt-5'>
          <Button variant="primary" className='fb-button font-26 d-flex'>
            <div>
              <FontAwesomeIcon icon={faFacebook} className='font-60' /> 
            </div>          
            &nbsp;Continue With<br></br> Facebook        
          </Button>
          <div className='fb-block'>
            <h3 className='text-white font-face-om'>+20</h3>
            <p className='small-text-color'>points</p>
          </div>
        </div>      
        
        <p className='text-white font-24 text-center'>or</p>
        
        <div className='d-flex'>
          <Button variant="primary" className='email-button font-26 d-flex' onClick={() => setShowSignupForm(true)}>
            <div>
              <FontAwesomeIcon icon={faEnvelope} className='font-60' /> 
            </div>          
            &nbsp;Continue With<br></br> Email        
          </Button>
          <div className='email-block'>
            <h3 className='text-white font-face-om'>+20</h3>
            <p className='small-text-color'>points</p>
          </div>
        </div>
        
        <div className='policy-pad mt-5 pt-4 text-center'>
          <a href='/' className='text-white'>
            By using this platform, I acknowledge that I have<br></br>
            reviewed and agreed to the Terms of Use and Privacy<br></br> Policy.
          </a>
        </div>
      </div>
    )}
    {showSignupForm && (
      <>
        <AmplifyAuthenticator initialAuthState="signup">
          <AmplifySignUp />
        </AmplifyAuthenticator>

        <div className='container-85 d-flex m-auto'>
          <Button className='email-button font-26' onClick={() => setShowSignupForm(false)}>
            Go Back
          </Button>
        </div>        
      </>
    )}    

    <div className='d-flex mt-3'>
      <div className='auth-block'>
        <h3 className='text-white font-face-om text-center'>10</h3>
        <p className='text-white font-face-om font-13 text-center'>POINTS</p>
      </div>
      <div className='auth-footer'>
        <p className='text-white font-18'>
          Create Your Free StreetTeam Account or <a href='' className='text-white'>Log In Now</a> to Unlock Free Merch, 
          Backstage Passes, and Other Exclusive Perks From Your Favorite Artists
        </p>
      </div>
    </div>
    </React.Fragment>    
  )
}