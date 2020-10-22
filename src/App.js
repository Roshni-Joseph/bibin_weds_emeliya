import React, {Fragment} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Gallerys from './components/Gallery/Gallerys';
import Hero from './components/Pages/Hero';
import Invitation from './components/Pages/Invitation';
import Ourstory from './components/Pages/Ourstory';
import Family from './components/Pages/Family';
import Sendmessage from './components/Pages/Sendmessage';
import Footer from './components/Pages/Footer';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Hero/>
      <Invitation/>
      <Ourstory/>
      <Family/>
      <Gallerys />
      <Sendmessage/>
      <Footer/>
    </Fragment>
  );
}

export default App;
