import logo from './logo.svg';
import './App.css';
import TopNav from '../src/components/TopNav'
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello Portfolio</h1> */}
      <TopNav></TopNav>
      <Banner></Banner>
    </div>
  );
}

export default App;


