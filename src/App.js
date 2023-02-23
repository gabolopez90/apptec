import { BrowserRouter as HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Agregar from './pages/Agregar';
import 'bootstrap/dist/css/bootstrap.min.css';

const basename = window.location.pathname;

function App() {
  return (
    <>
      <HashRouter basename={basename}>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />}/>          
          <Route path='/agregar' exact element={<Agregar />}/>      
        </Routes>        
      </HashRouter>
    </>
  );
}

export default App;