import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Routes } from './Routes';
import "./config";
import { SecureProvider } from './component/SecureViewContext';
import { Waitlist } from './page/Waitlist';
import { Authenticate } from './page/Authenticate';
import { Tiers } from './page/Tiers';
import { NFTDetailBronze } from './page/NFTDetailBronze';
import { NFTDetailDiamond } from './page/NFTDetailDiamond';
import { Collection } from './page/Collection';

function App() {
  return (
    <Router>  
      <div className='main-container m-auto'> 
        <SecureProvider>
          <Switch>
            <Route exact path="/">
              <Waitlist />
            </Route>
            <Route path="/authenticate">
              <Authenticate />
            </Route>
            <Route path="/tiers">
              <Tiers />
            </Route>
            <Route path="/nftdetailbronze">
              <NFTDetailBronze />
            </Route>
            <Route path='/nftdetaildiamond'>
              <NFTDetailDiamond />
            </Route>
            <Route path="/collection">
              <Collection />
            </Route>
            <Route path="/authenticate">
              <Authenticate />
            </Route>
          </Switch>         
        </SecureProvider>    
      </div>
    </Router>  
  );
}

export default App;
