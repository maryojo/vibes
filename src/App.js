import React from 'react';
import './index.css'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import Register from './pages/register';

  
function App() {
return (
    <Router>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/register' element={<Register/>} />
    </Routes>
    </Router>
);
}
  
export default App;