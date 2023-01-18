// Layout components

import Navbar from './layout/navbar/Navbar';

// Components
import StudentCardList from './components/studentCardList/StudentCardList';

import './App.scss';

function App() {

  return (
    <div className="App">
      <Navbar />
      <StudentCardList />
    </div>
  );
}

export default App;