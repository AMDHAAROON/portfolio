
import './App.css';
import About from './components/About';
import Contact from './components/contact';
import Footer from './components/footer';
import Header from './components/header';
import Hero from './components/hero';
import Project from './components/project';
import Resume from './components/resume';
import Skill from './components/skill';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Skill/>
      <Project/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
