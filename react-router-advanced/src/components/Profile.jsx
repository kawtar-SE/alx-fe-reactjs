import { Link, Outlet } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      {/* Links to nested routes */}
      <nav>
        <Link to="details">Details</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested routes will render here */}
      <Outlet />
    </div>
  );
};

export default Profile;
