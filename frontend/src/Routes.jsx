import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Waitlist } from './page/Waitlist';
import { Authenticate } from './page/Authenticate';
import { Tiers } from './page/Tiers';
import { NFTDetailBronze } from './page/NFTDetailBronze';
import { NFTDetailDiamond } from './page/NFTDetailDiamond';
import { Collection } from './page/Collection';

export const Routes = () =>{
  return(
    <Router>            
      <Switch>
        <Route exact path="/" element={<Waitlist />} />
        <Route path="/authenticate" element={<Authenticate />} />
        <Route path="/tiers" element={<Tiers />} />
        <Route path="/nftdetailbronze" element={<NFTDetailBronze />} />
        <Route path='/nftdetaildiamond' element={<NFTDetailDiamond />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/authenticate" element={<Authenticate />} />
      </Switch>         
    </Router>
  )
}