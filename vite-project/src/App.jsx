import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";



import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OtpForm from './components/user/OtpFrom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage'
import ServicePage from './pages/ServicePage';
import BlogPage from './pages/BlogPage';
import DashboardPage from './pages/DashboardPage';
import AuthGuard from './components/auth/AuthGuard';



const App = () => {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/otp" element={<AuthGuard><OtpForm /></AuthGuard>} />
                <Route path="/home" element={<AuthGuard><Home /></AuthGuard>} />
                <Route path="/about" element={<AuthGuard><AboutPage /></AuthGuard>} />
                <Route path="/contact" element={<AuthGuard><ContactPage /></AuthGuard>} />
                <Route path="/services" element={<AuthGuard><ServicePage /></AuthGuard>} />
                <Route path="/blog" element={<AuthGuard><BlogPage /></AuthGuard>} />
                <Route path="/dashboard" element={<AuthGuard><DashboardPage /></AuthGuard>} />
                
            </Routes>
        </BrowserRouter>
  );
};

export default App;