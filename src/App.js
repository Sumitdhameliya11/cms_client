import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from './component/Header';
import Home from './pages/Home';
import ErrorPage from "./pages/ErrorPage";
import Footer from "./component/Footer";
const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      {isHomePage && <Header />}
      <Routes>
        <Route path='/' element={<Home />} />
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
