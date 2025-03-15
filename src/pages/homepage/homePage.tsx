import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import './homePage.scss';

const HomePage: React.FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to Todo App</h1>
        <p>Manage your tasks efficiently with our simple and intuitive todo application.</p>
        {isAuthenticated ? (
          <Link to="/todos" className="cta-button">
            Go to Your Todos
          </Link>
        ) : (
          <div className="auth-buttons">
            <Link to="/login" className="cta-button login">
              Login
            </Link>
            <Link to="/register" className="cta-button register">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;