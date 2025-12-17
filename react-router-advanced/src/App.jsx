import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ProfileDetails from './pages/profile/ProfileDetails';
import ProfileSettings from './pages/profile/ProfileSettings';
import BlogPost from './pages/BlogPost';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      {/* Navbar toujours en haut */}
      <Navbar />

      {/* Main content */}
      <main style={{ flex: 1, padding: '2rem' }}>
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Home />} />

          {/* Protected Profile Route avec Nested Routes */}
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          >
            {/* Default nested route */}
            <Route index element={<ProfileDetails />} />
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>

          {/* Dynamic Blog Route */}
          <Route path="/blog/:id" element={<BlogPost />} />

          {/* Login page */}
          <Route path="/login" element={<Login />} />

          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
