import { useNavigate } from 'react-router-dom';
import { login } from '../auth';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    login(); // set user as logged in
    navigate('/profile'); // redirect to profile after login
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;