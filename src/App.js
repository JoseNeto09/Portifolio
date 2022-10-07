import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar} from './components/NavBar';
import { Banner } from './components/Banner';
import { SkillsBackend } from './components/SkillsBackend';
import { SkillsFront } from './components/SkillsFront';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <SkillsBackend />
      <SkillsFront/>
    </div>
  );
}

export default App;
