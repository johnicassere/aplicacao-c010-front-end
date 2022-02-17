import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Main } from './pages/Main';
import { Login } from './pages/Login/index';
import { Register } from './pages/Register/Register';
import { Mesa } from './pages/Mesa/index';
import { Review } from './pages/Review/Review'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Profile } from './pages/Profile';



axios.defaults.baseURL = 'https://c010back.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'application/json';


ReactDOM.render(
  <React.StrictMode>
      <NavBar/>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/cadastrar" element={<Register/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/mesa" element={<Mesa/>} />
            <Route path="/view" element={<Review />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);