import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ExpenseTracker from './components/ExpenseTracker';

function App() {
  return (
    <Router>
      <div className="bg-teal-100 min-h-screen flex flex-col items-center justify-center">
        <nav className="w-full flex justify-start px-4 py-2">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-blue-600 hover:underline">Expense Tracker</Link>
            </li>
            <li>
              <Link to="/dashboard" className="text-blue-600 hover:underline">Dashboard</Link>
            </li>
          </ul>
        </nav>
        <div className="flex-grow flex items-center justify-center  w-full max-w-[1200px] mx-auto">
          <Routes>
            <Route path="/" element={<div className='w-[40vw]'><ExpenseTracker /></div>} />
            <Route path="/dashboard" element={<div className='w-full flex items-centre justify-center'><Dashboard /></div> } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
