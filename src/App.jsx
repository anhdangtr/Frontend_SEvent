import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './auth/SignUp';
import LogIn from './auth/LogIn';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Sửa từ BroswerRouter → BrowserRouter

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/auth/SignUp" element={<SignUp />} /> 
          <Route path="/auth/LogIn" element={<LogIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App; // Sửa export chưa hoàn chỉnh
