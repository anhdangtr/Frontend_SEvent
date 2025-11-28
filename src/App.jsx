import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './auth/SignUp';
import LogIn from './auth/LogIn';
<<<<<<< HEAD
import PageTest from './pages/PageTest';
import About from './pages/About';  // Import About page
import Contact from './pages/Contact';  // Import Contact page 
import Navbar from './components/Navbar'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // React Router v6
=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Sửa từ BroswerRouter → BrowserRouter
>>>>>>> d6dfb7fcc22a852840caf1f375a137360c530d83

function App() {
  const [count, setCount] = useState(0);

<<<<<<< HEAD
  return (  
    <div>
      <Router>
        <Navbar />
        <Routes>
          {/* Define your routes here */}
          <Route path="/auth/SignUp" element={<SignUp />} />
          <Route path="/auth/LogIn" element={<LogIn />} />
          <Route path="/PageTest" element={<PageTest />} /> {/* Home Page */}
          
          {/* Add routes for About and Contact */}
          <Route path="/about" element={<About />} /> {/* About Page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact Page */}
=======
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/auth/SignUp" element={<SignUp />} /> 
          <Route path="/auth/LogIn" element={<LogIn />} />
>>>>>>> d6dfb7fcc22a852840caf1f375a137360c530d83
        </Routes>
      </Router>
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App; // Sửa export chưa hoàn chỉnh
>>>>>>> d6dfb7fcc22a852840caf1f375a137360c530d83
