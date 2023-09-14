import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Gorka Echavarri | Web Developer
        </p>
      </header>

     <Profile />

    </div>
  );
}

export default App;
