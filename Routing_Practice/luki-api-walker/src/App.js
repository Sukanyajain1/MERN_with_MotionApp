import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import StarWarsForm from './components/StarWarsForm';
import SwResults from './components/SwResults';

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        {/* Permanent tags */}
        <h1 className='text-center'>Luke API Walker Project</h1><br/>
        <StarWarsForm></StarWarsForm>
        {/* Component tags */}
        <Switch>
          <Route exact path="/:category/:id">
            <SwResults></SwResults>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
