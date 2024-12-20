import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>TodoList:-</h1>
        <Outlet></Outlet>
    </div>
  );
}

export default App;
