import React, {FC} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/navbar';
import { Home } from './pages/home';

const App : FC =()=> {
  return (
    <div className="App">
      <NavBar/>
      <main>
        <Home/>
      </main>
    </div>
  );
}

export default App;
