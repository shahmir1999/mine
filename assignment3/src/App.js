
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';
import Signup from './Components/pages/Signup';
import LoginSignup from './Components/pages/LoginSignup';
import Navbar from './Components/inc/Navbar';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
    <div>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/Contact" element={<Contact/>}/>
      <Route exact path="/About" element={<About/>}/>
      <Route exact path="/Signup" element={<Signup/>}/>
      <Route exact path="/LoginSignup" element={<LoginSignup/>}/>
        </Routes>
    </div>
    </Router>
   
  );
}

export default App;
