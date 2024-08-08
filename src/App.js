import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from './component/Header';
import Home from './pages/Home';
import ErrorPage from "./pages/ErrorPage";
import Footer from "./component/Footer";
import Registration from "./component/Registration";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
import ForgotPassword from "./component/Forgot_Password";
import ResetPassword from "./component/Reset_Password";
const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      {isHomePage && <Header />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/forget-password' element={<ForgotPassword />} />
        <Route path='/reset-password/:id/:token' element={<ResetPassword />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      {isHomePage && <Footer/>}
    </>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
