import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import route from './routes/route';

function App() {
  return (
    <div className="App">
      <RouterProvider router={createBrowserRouter(route)}/>
    </div>
  );
}

export default App;
