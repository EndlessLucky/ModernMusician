import React, { createContext,useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { Auth } from 'aws-amplify';

export const UserContext = createContext({});

export const SecureProvider = ({ children }) => {
  const [authState, setAuthState] = useState();
  const [userId, setUserId] = useState();
  // set the initial authState if the current user is already authenticated (in the case of oauth redirect, it will be)
  if (authState === undefined) {
      try {
          
          Auth.currentAuthenticatedUser()
          .then(authData => {
          setAuthState(AuthState.SignedIn);
          setUserId(authData);
          })
          .catch(error =>
          console.log(`2 -- error in signing in current auth user`, error)
          );
      } catch (err) {
      console.error(`1 -- unable to login current auth user`, err);
      }
  }

  // use this useEffect to changes state
  useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUserId(authData);
    });
  }, []);

  console.log(`userId is now`,userId);

  return (
    <UserContext.Provider
      value={{
        userId,
        authState
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserContext.propTypes = {
  children: PropTypes.node.isRequired,
};
