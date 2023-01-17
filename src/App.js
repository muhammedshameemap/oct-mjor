  //rfce to create boilerplate code
import './App.css'
import Footer from './components/inc/Footer'
import Navbar from './components/inc/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <Router>
    <>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Home/>}></Route>

    <Route path="/About" element={<About/>}></Route>

    <Route path="/Contact" element={<Contact/>}></Route>
   
    </Routes>
    <Footer/>
    </>
    </Router>
  );
}

export default App;
