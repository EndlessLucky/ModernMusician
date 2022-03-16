import { Dropdown } from 'react-bootstrap';

export default function Header() {
  return(
    <div className='header d-flex justify-content-between'>
      <img src='./Square_-_Bright.png' alt='' width='38px' height='38px'/>
      <Dropdown>
        <Dropdown.Toggle id="role-dropdown" className="bg-transparent border-none font-28 font-face-om pt-0 pb-0">
          RELICS
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1" active>
            Profile
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">
            Sign Out
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <img src='./profile.png' alt='' width='42px' height='45px'/>
    </div>
  )
}