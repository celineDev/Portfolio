import React from 'react';
import Navigation from './components/Navigation';
import Accueil from './components/Accueil';
import Apropos from './components/Apropos';
import Competences from './components/Competences';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
        <Navigation />
        <Accueil />
        <Apropos />
        <Competences />
        <Portfolio />
        <Contact />
    </BrowserRouter>
  );
};

export default App;
