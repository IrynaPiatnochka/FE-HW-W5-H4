// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetails from './components/CharacterDetails';
import Comics from './components/Comics';
import NotFound from './components/NotFound';

const App = () => {
    return (
        
            <>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/characters" element={<BrowseCharacters />} />
                    <Route path="/characters/:characterId" element={<CharacterDetails />} />
                    <Route path="/comics" element={<Comics />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                
            </>
        
    );
};

export default App;

