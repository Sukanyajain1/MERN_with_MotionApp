import './App.css';
import {
  BrowserRouter, //this will enable routing for the application, otherwise the routing features will not work.
  Switch, //Switch let's us determine which components/elements need to show up only at certain routes.
  Route, //Route let's us specify the route url address for an element to show up in
  Link //Link is just like an href, but it will not reload the page.
} from 'react-router-dom';
import About from './components/About';
import Players from './components/Players';
import Teams from './components/Teams';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navbar">
          <h1>Routing Intro</h1>
          <ul id="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/players">Player</Link></li>
            <li><Link to="/teams">Teams</Link></li>
          </ul>
        </div>

        <div className="page-content">
          <Switch>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/players">
              <Players></Players>
            </Route>
            <Route exact path="/teams">
              <Teams></Teams>
            </Route>
            <Route exact path="/teams/:id">
              <Teams></Teams>
            </Route>
            <Route exact path="/teams/:id/:color">
              <Teams></Teams>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
