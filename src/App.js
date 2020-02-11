import React, { useState, useEffect } from 'react';
import './App.css';

// Importing components
import Search from './components/search'
import Results from './components/results'

/* Pixabay
User: kahagi2080@mailmink.com
Pass: hola1234 */

function App() {

  const [searchWord, setSearchWord] = useState(null);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(null);

  useEffect(() => {
    if (searchWord !== null) {
      const url = `https://pixabay.com/api/?key=15216018-e65acb1671acb3c799dd2acbc&q=${searchWord}&page=${page}`;
      fetch(url)
        .then(ans => ans.json())
        .then(res => setImages(res.hits))
    }
  }, [searchWord,page]);

  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <h3 className="text-center mb-5">Image Search</h3>
        <Search data={data => {
          setSearchWord(data);
          setPage(1);
        }} />
      </div>
      <Results
        imagesResults={images}
        previousPage={() => {
          let pageNum = page;
          if (pageNum > 1) {
            pageNum-=1;
            setPage(pageNum);
          } else{
            return null;
          }
        }}
        nextPage={() => {
          let pageNum = page;
          pageNum+=1;
          setPage(pageNum);
        }}
      />
    </div>
  );
}

export default App;