import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Skills2 from './components/Skills2';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      {/* <Skills /> */}
      <Skills2 />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
