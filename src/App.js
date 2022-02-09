import './App.css';
import Home from './views/Home';
import { EntryProvider } from './context/EntryContext';

function App() {
  return (
    <div className="App">
      <h1 className="title">Guest Book</h1>
      <EntryProvider>
        <Home />
      </EntryProvider>
    </div>
  );
}

export default App;
