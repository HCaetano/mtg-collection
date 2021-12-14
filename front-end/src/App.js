import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import CardDetails from './pages/CardDetails/CardDetails';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route exact path="/card/:id" element={ <CardDetails /> } />
    </Routes>
  </BrowserRouter>
);

export default App;
