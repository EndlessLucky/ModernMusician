import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './layout/Header';

function App() {
  return (
    <Router>
      <div className='main-container m-auto'>
        <Header/>
      </div>
    </Router>
  );
}

export default App;
