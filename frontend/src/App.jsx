import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './store/slices/authSlice';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ProtectedRoute from './components/auth/ProtectedRoute';
import './index.css';

// Minimal Dashboard Component for PR 1
const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#131315] text-white p-8">
      <div className="bg-[#201f22] border border-[#414751] rounded-2xl p-12 shadow-2xl text-center max-w-lg w-full">
        <h1 className="text-4xl font-black mb-4 font-manrope">Dashboard</h1>
        <p className="text-[#c1c7d3] mb-8 font-inter">
          Welcome, <span className="text-blue-400 font-bold">{user?.name}</span>! <br/>
          You have successfully logged in to the OmniRetail Portal.
        </p>
        <button
          onClick={handleLogout}
          className="px-8 py-3 bg-red-500/10 border border-red-500/20 text-red-400 font-semibold rounded-xl hover:bg-red-500/20 transition-all"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected Dashboard Route */}
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
