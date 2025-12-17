import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../auth';

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }

  return children; // Render the protected component if authenticated
};

export default ProtectedRoute;
