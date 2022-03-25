import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./config";
import { SecureProvider } from './component/SecureViewContext';
import Waitlist from './page/Waitlist';
import Authenticate from './page/Authenticate';
import Tiers from './page/Tiers';
import NFTDetailBronze from './page/NFTDetailBronze';
import NFTDetailDiamond from './page/NFTDetailDiamond';
import Collection from './page/Collection';

function App() {
  return (
    <Router>  
      <div className='main-container m-auto'> 
        <SecureProvider>
          <Routes>
            <Route exact path="/" element={<Waitlist />} />
            <Route path="/tiers" element={<Tiers />} />
            <Route path="/nftdetailbronze" element={<NFTDetailBronze />} />
            <Route path='/nftdetaildiamond' element={<NFTDetailDiamond />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/authenticate" element={<Authenticate />} />
          </Routes>           
        </SecureProvider> 
      </div>      
    </Router>  
  );
}

export default App;
