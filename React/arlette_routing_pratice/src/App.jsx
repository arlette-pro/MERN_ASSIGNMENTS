import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import ComponentParam from './components/ComponentParam';
import NumberPage from './components/NumberPage';
import WordPage from './components/WordPage';


function App() {
  

  return (
  <div className='App1'>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/:number" element={<NumberPage />} />
      <Route path="/:word" element={<WordPage />} />
      <Route path="/:word/:color?/:bgColor?" element={<ComponentParam />} />
    </Routes>
  </div>
  );
}

export default App
