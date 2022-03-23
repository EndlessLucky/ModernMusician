import { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import * as fcl from "@onflow/fcl";

export default function Header() {
  const [user, setUser] = useState({ loggedIn: null });

  useEffect(() => { 
    fcl.currentUser.subscribe(setUser);
  }, []);

  return(
    <div className='header d-flex justify-content-between'>
      <Link to="/">
        <img src='./Square_-_Bright.png' alt='' width='38px' height='38px'/>
      </Link>   
      <div className='col text-center'>
        <Dropdown>
          <Dropdown.Toggle id="role-dropdown" className="bg-transparent border-none font-28 font-face-om pt-0 pb-0">
            RELICS
          </Dropdown.Toggle>

          <Dropdown.Menu variant="dark">
            {user.loggedIn ?
              <Dropdown.Item onClick={fcl.unauthenticate}>
                Sign out
              </Dropdown.Item>
            :
              <Dropdown.Item onClick={fcl.logIn}>
                Sign in
              </Dropdown.Item>
            }
            
            <Dropdown.Item href="#/action-2">
              Profile
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {user.loggedIn &&
          <p className='text-white mb-0'>{user.addr}</p>
        }
      </div>   
      <img src='./profile.png' alt='' width='42px' height='45px'/>
    </div>
  )
}