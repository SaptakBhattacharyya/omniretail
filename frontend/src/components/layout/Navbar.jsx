import { Link } from 'react-router-dom';
import useAuthStore from '../../store/authStore';
import useCartStore from '../../store/cartStore';

const Navbar = () => {
  const { user, logout } = useAuthStore();
  const { items } = useCartStore();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Omni<span>Retail</span>
        </Link>
        
        <div className="nav-links">
          <Link to="/search" className="nav-link">Search</Link>
          <Link to="/locator" className="nav-link">Store Locator</Link>
          
          <div className="nav-actions">
            <Link to="/cart" className="cart-icon">
              🛒 <span className="cart-count">{items.length}</span>
            </Link>
            
            {user ? (
              <div className="user-menu">
                <span className="user-name">Hello, {user.name}</span>
                <button onClick={logout} className="logout-btn">Logout</button>
              </div>
            ) : (
              <Link to="/login" className="login-btn">Login</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
