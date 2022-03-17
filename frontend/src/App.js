import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './layout/Header';
import Footer from './layout/Footer';
import Waitlist from './page/Waitlist';

function App() {
  return (
    <Router>
      <div className='main-container m-auto'>
        <Header/>
          <Routes>
            <Route exact path="/" element={<Waitlist />} />
          </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
