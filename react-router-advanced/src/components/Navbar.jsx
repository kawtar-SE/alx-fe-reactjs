import { Link } from 'react-router-dom';
import { isAuthenticated, logout } from '../auth';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // redirect to home after logout
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>MyApp</div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/profile" style={styles.link}>Profile</Link>
        <Link to="/blog/1" style={styles.link}>Blog</Link>

        {!isAuthenticated() ? (
          <Link to="/login" style={styles.link}>Login</Link>
        ) : (
          <button onClick={handleLogout} style={styles.button}>Logout</button>
        )}
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#1a1a1a',
    color: '#fff',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  links: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
  button: {
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#646cff',
    color: '#fff',
  },
};

export default Navbar;
