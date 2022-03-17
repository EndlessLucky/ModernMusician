import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './layout/Header';
import Footer from './layout/Footer';

function App() {
  return (
    <Router>
      <div className='main-container m-auto'>
        <Header/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
