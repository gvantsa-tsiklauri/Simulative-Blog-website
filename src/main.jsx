import Navbar from './components/navbar.jsx';
import Blogs from './components/blogs.jsx';
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import App from './App.jsx';
import About from './components/about';
import Login from './components/login.jsx';
import { createRoot } from 'react-dom/client';
import SignUp from './components/signup.jsx';
import Newblog from './components/newblog.jsx';
import Details from './components/Details.jsx';


function Root() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <RootContent />
      </BrowserRouter>
    </React.StrictMode>
  );
}

function RootContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";
  const isSignUpPage = location.pathname === "/signup";
  const isAddBlogPage = location.pathname === "/add blog";

  return (
    <>
      {(!isLoginPage && !isSignUpPage ) && <Navbar />}
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/addblog" element={<Newblog />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  );
}

createRoot(document.getElementById('root')).render(<Root />);
