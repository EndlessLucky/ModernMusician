import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Waitlist from './page/Waitlist';
import Preorder from './page/Preorder';
import Bronze from './page/Bronze';
import Diamond from './page/Diamond';
import Waitingroom from './page/Waitingroom';
import Available from './page/Available';
import Claimbronze from './page/Claimbronze';
import Claimdiamond from './page/Claimdiamond';
import Collection from './page/Collection';
import Marketplace from './page/Marketplace';
import Authenticate from './page/Authenticate';

function App() {
  return (
    <Router>
      <div className='main-container m-auto'>       
        <Routes>
          <Route exact path="/" element={<Waitlist />} />
          <Route path="/preorder" element={<Preorder />} />
          <Route path="/bronze" element={<Bronze />} />
          <Route path="/diamond" element={<Diamond />} />
          <Route path="/waitingroom" element={<Waitingroom />} />
          <Route path="/available" element={<Available />} />
          <Route path="/claimbronze" element={<Claimbronze />} />
          <Route path="/claimdiamond" element={<Claimdiamond />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/authenticate" element={<Authenticate />} />
        </Routes>         
      </div>
    </Router>
  );
}

export default App;
