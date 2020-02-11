import React, { useState, useEffect } from 'react';
import './App.css';

// Importing components
import Search from './components/search'

/* Pixabay
User: kahagi2080@mailmink.com
Pass: hola1234 */

function App() {

  const [searchWord, setSearchWord] = useState(null);

  useEffect(() => {
    if (searchWord !== null) {
    const url = `https://pixabay.com/api/?key=15216018-e65acb1671acb3c799dd2acbc&q=${searchWord}`;
    console.log(url);
  }
}, [searchWord]);

return (
  <div className="container">
    <div className="jumbotron mt-5">
      <h3 className="text-center mb-5">Image Search</h3>
      <Search data={data => {
        setSearchWord(data);
      }} />
    </div>
    {searchWord}
  </div>
);
}

export default App;