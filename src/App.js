import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';

import { NavBar} from './components/NavBar';
import { Banner } from './components/Banner';
import { SkillsBackend } from './components/SkillsBackend';
import { SkillsFront } from './components/SkillsFront';
import { Projects } from './components/Projects';
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <SkillsBackend />
      <SkillsFront/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
