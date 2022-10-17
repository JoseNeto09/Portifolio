import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

/*estilos de cada componente*/ 
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
import { SobreMim } from './components/Sobre/SobreMim'; 

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <SkillsFront/>
      <SkillsBackend />
      <Projects />
      <SobreMim />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
