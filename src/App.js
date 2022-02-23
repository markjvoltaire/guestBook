import './App.css';
import Home from './views/Home';
import { EntryProvider } from './context/EntryContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import { UserProvider } from './context/UserContext';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';

export default function App() {
  return (
    <div className="App">
      <h4 className="title">Guest Book</h4>
      <UserProvider>
        <BrowserRouter>
          <Switch>
            <EntryProvider>
              <PrivateRoute exact path="/">
                <Home />
              </PrivateRoute>
              <Route path="/login">
                <Login />
              </Route>
            </EntryProvider>
          </Switch>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}
