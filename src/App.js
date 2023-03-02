import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout components
import Navbar from './layout/navbar/Navbar';

// Pages
import StudentDetail from "./pages/StudentDetail";
import Home from "./pages/Home";
import AddStudent from "./pages/AddStudent";

import './App.scss';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home />}></Route>
          <Route path="/students/new" element={ <AddStudent />}></Route>
          <Route path="/students/:studentId" element={ <StudentDetail/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;