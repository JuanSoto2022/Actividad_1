import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header className="App-header">
        <p className="App">
        <img src={process.env.PUBLIC_URL+"Fichas.png"} />
        </p>
      </header>
    </div>
  );
}

export default App;
