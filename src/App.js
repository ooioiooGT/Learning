
import './App.css';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import Profile from './Component/Profile';
import Chart from './Component/Chart';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path='/Chart' element={<Chart />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
