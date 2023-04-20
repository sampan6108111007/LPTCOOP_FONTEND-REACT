// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const CustomerList = () => {
//   const [wcucfcoopbranch, setWcucfcoopbranch] = useState([]);

//   useEffect(() => {
//     const fetchWcucfcoopbranch = async () => {
//       const res = await axios.get("http://localhost:3000/wcucfcoopbranch");
//       setWcucfcoopbranch(res.data);
//     };

//     fetchWcucfcoopbranch();
//   }, []);

//   return (
//     <div>
//       <h1>Branch List</h1>
//       <ul>
//         {wcucfcoopbranch.map((wcucfcoopbranch) => (
//           <li key={wcucfcoopbranch}>{wcucfcoopbranch}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CustomerList;
import ReactDOM from "react-dom/client";
import { NavLink, RouteObject, Navigate } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import React from 'react'
import Content from './component/Content'
import Footer from './component/Footer'
import Header from './component/Header'
import Menu from './component/Menu'

//page
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";


export default function App() {
  
  return (
    
    <BrowserRouter>
      <Header/>
      <Menu/>
      <Content/>
      <Footer/>
      <head>
        <h1>Hello World</h1>
      </head>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/dashboard" element={<Navigate to="/" state={"From Dashboard"} />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  )
}

