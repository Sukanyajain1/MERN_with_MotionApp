import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App container">
      <h1>Welcome to the To Do List!</h1>

      <Todo></Todo>
    </div>
  );
}

export default App;
