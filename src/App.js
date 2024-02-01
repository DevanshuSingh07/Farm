
import { BrowserRouter as Router,
   } from 'react-router-dom';
   import { Routes ,Route } from 'react-router-dom';
   import Home from'./pages/Home';
   import About from './pages/About';
   import Navbar from './components/Navbar';
   import Contact from './pages/Contact';
   import Service from './pages/Service';
   


function App() {
  return (
    
    <Router>
      <Navbar/>
      <Routes>   
        <Route path="/" exact element={
        <Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/service" element={<Service/>} />
      </Routes>
    </Router>
  );
}

export default App;
