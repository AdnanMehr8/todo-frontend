import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './App.scss';
import Navbar from './components/navbar/navbar';
import HomePage from './pages/homepage/homePage';
import Login from './components/auth/login/login';
import Register from './components/auth/register/register';
import ProtectedRoute from './components/protectedRoute/protectedRoute';
import TodoPage from './pages/todoPage/todoPage';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/todos" element={<TodoPage />} />
              </Route>
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
};

export default App;