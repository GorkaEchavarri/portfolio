import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Profile from './components/UI/Profile/Profile';
import Projects from './components/UI/Projects/Projects';

function App() {
  return (
    <div className="App">
    <div className="Container">

     <Profile />

     <Projects />

    </div>
    </div>
  );
}

export default App;

// Dependencies, FontAwesome, React Tables, Bootstraps... Mirar para readme que son.
