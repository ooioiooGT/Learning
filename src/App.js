
import './App.css';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import Profile from './Component/Profile';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Agora from './Component/Agora';
import Homepage from './Component/Homepage';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            
            <Route path='/' element={<Login />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path="/Profile" element={<Profile  />} />
            <Route path='/Agora' element={<Agora />} />
            <Route path='/Homepage' element={<Homepage />} /> 
            
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
