import './App.css';
import Header from './component/Header';
import Navbar from './component/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Header value="Portfolio"/>
      </header>
      <div>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
