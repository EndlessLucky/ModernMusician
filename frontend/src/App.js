import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./config";
import Waitlist from './page/Waitlist';
import Collection from './page/Collection';
import Marketplace from './page/Marketplace';

import Authenticate from './page/Authenticate';
import Tiers from './page/Tiers';
import NFTDetailBronze from './page/NFTDetailBronze';
import NFTDetailDiamond from './page/NFTDetailDiamond';

function App() {
  return (
    <Router>
      <div className='main-container m-auto'>       
        <Routes>
          <Route exact path="/" element={<Waitlist />} />
          <Route path="/tiers" element={<Tiers />} />
          <Route path="/nftdetailbronze" element={<NFTDetailBronze />} />
          <Route path='/nftdetaildiamond' element={<NFTDetailDiamond />} />

          <Route path="/collection" element={<Collection />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/authenticate" element={<Authenticate />} />
        </Routes>         
      </div>
    </Router>
  );
}

export default App;
