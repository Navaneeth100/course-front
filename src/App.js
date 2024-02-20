import '../src/components/style.css';
import Home from './components/Home';
import View from './components/View';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Add from './components/Add';




function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path="" element={<Home/>} />
      <Route path="/view" element={<View/>} />
      <Route path="/add" element={<Add/>} />
    </Routes>
    </div>
  );
}

export default App;
