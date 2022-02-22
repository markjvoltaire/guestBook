import './App.css';
import Home from './views/Home';
import { EntryProvider } from './context/EntryContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';

function App() {
  return (
    <div className="App">
      <h4 className="title">Guest Book</h4>
      <BrowserRouter>
        <Switch>
          <EntryProvider>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </EntryProvider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
