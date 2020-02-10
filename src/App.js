import React from 'react';
import './App.css';

// Importing components
import Search from './components/search'


function App() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h3 className="text-center mb-5">Image Search</h3>
        <Search/>
      </div>
    </div>
  );
}

export default App;