import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import { Navigate } from 'react-router-dom';

const routes = (


  <Router>

    <Routes>

      <Route path="/dashboard" exact element={<Home />} />

      <Route path="/login" exact element={<Login />} />

      <Route path="/signup" exact element={<SignUp />} />

      <Route path="/" exact element={<Navigate to="/dashboard" replace />} />

    </Routes>

  </Router>
);

const App = () => {

  return (
    <div>
      {routes}
    </div>
  )
}

export default App