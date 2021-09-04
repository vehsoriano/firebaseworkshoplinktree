import './App.css';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home'
import Profile from './pages/Profile'

function App() {
  return (
    <>
      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </>
  );
}

export default App;
