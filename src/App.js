import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import './components/Navbar/styles.navbar.css';
import './components/Banner/styles.banner.css';
import './components/Footer/styles.footer.css';
import './components/Projects/styles.projects.css';
import './components/Skills/styles.skills.css';

import { NavBar} from './components/Navbar/NavBar';
import { Banner } from './components/Banner/Banner';
import { SkillsBackend } from './components/Skills/SkillsBackend';
import { SkillsFront } from './components/Skills/SkillsFront';
import { Projects } from './components/Projects/Projects';
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer/Footer";

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
