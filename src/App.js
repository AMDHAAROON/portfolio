
import './App.css';
import About from './components/About';
import Header from './components/header';
import Hero from './components/hero';
import Project from './components/project';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Project/>
    </div>
  );
}

export default App;
