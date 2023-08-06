import './App.css';
import Home from './components/Home';
import AddSite from './components/AddSite';
import { Route, Routes} from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-site" element={<AddSite />} />
    </Routes>
  );
}

export default App;
