import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';

function App() {
  return (
     <Router>
        <NavBar />
        <Routes>
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
  );
}

export default App;
