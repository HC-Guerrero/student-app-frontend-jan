import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout components
import Navbar from './layout/navbar/Navbar';

// Components
import StudentCardList from './components/studentCardList/StudentCardList';

// Pages
import StudentDetail from "./pages/StudentDetail";

import './App.scss';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={ <StudentCardList />}></Route>
          <Route path="/students/:studentId" element={ <StudentDetail/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;