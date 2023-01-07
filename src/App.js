import React from 'react';
import './index.css'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import Register from './pages/register';
import Explore from './pages/explore';
import Genre from './pages/genre';

  
function App() {
return (
    <Router>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/discover' element={<Explore/>} />
        <Route path='/genre' element={<Genre/>} />
    </Routes>
    </Router>
);
}
  
export default App;