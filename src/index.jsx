import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Housing from './pages/Housing';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './pages/Error';
import './style/main.css';
import './style/normalize.css';
import './style/main.css.map';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/"
          element={<Home />}
        />
        <Route exact path="/kasa/"
          element={<Home />}
        />
        <Route exact path="/about"
          element={<About />}
        />
        <Route exact path={'/logement/:id'}
          element={<Housing />}
        />
        {/* Pour toutes url inconnues, on affiche la page d'erreur*/}
        <Route path='*'
          element={<Error />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>

  </React.StrictMode>
);

