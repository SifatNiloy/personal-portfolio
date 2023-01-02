import logo from './logo.svg';
import './App.css';
import TopNav from '../src/components/TopNav'
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <TopNav></TopNav>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}

export default App;


