import React, {useState} from 'react';
import './App.css';

// Importing components
import Search from './components/search'

/* Pixabay
User: kahagi2080@mailmink.com
Pass: hola1234 */

function App() {

  const [searchWord, setSearchWord]= useState("Cafe");

  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <h3 className="text-center mb-5">Image Search</h3>
        <Search data={(data)=>{
          setSearchWord(data);
        }}/>
      </div>
      {searchWord}
    </div>
  );
}

export default App;