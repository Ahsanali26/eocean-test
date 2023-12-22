import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Store from './store';
import Layout from './layout';
import Home from './pages/home';

const App = () => {
  return (
    <Provider store={Store}>
      <Router>
        <div className='d-flex align-items-center justify-content-center h-screen'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Layout />} />
          </Routes>
        </div>
        <Layout />
      </Router>
    </Provider>
  );
};

export default App;
