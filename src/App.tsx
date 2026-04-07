import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './Welcome.tsx';
import Login from './Login.tsx';
import Register from './Register.tsx';
import Profile from './Profile.tsx';

function App() {
  return (
    <Router>
      <div className="h-dvh bg-white flex items-center justify-center font-sans tracking-tight overflow-hidden">
        <div className="w-full max-w-93.75 h-[calc(100dvh-30px)] bg-[#F7F8F9] border border-gray-200 relative flex flex-col">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
