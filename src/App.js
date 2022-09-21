import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './componentes/Home/Home';
import Navbar from './componentes/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>

    </div >
  );
}

export default App;