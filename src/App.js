import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import React from 'react';
import { Route, Router, Link } from 'wouter';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-4">
          <Route path="/profile">
            <Profile />
          </Route>
          {/* Add other routes here */}
        </div>
      </div>
    </Router>
  );
}

export default App;