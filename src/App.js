import React from 'react';
import './index.css'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import Register from './pages/register';
import Explore from './pages/explore';
import Genre from './pages/genre';
import TrendingSongs from './pages/trending-songs';
import ArtistDetails from './pages/artist-details';
import SongDetails from './pages/song-details';

  
function App() {
return (
    <Router>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/discover' element={<Explore/>} />
        <Route path='/genre' element={<Genre/>} />
        <Route path='/trending-songs' element={<TrendingSongs/>} />
        <Route path='/artists/:artistid' element={<ArtistDetails/>} />
        <Route path='/songs/:songid' element={<SongDetails/>} />
    </Routes>
    </Router>
);
}
  
export default App;