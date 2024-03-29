import React, { useState, useEffect } from "react";
import "./App.css";

// Importing components
import Search from "./components/search";
import Results from "./components/results";

function App() {
  const [searchWord, setSearchWord] = useState(null);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(null);

  useEffect(() => {
    const apiKey = "put here your api key";

    if (searchWord !== null) {
      const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchWord}&page=${page}`;
      fetch(url)
        .then((ans) => ans.json())
        .then((res) => setImages(res.hits));

      const topView = document.querySelector(".jumbotron");
      topView.scrollIntoView("auto", "start");
    }
  }, [searchWord, page]);

  return (
    <div className="container">
      <div className="jumbotron my-5">
        <h3 className="text-center mb-5">Image Search</h3>
        <Search
          data={(data) => {
            setSearchWord(data);
            setPage(1);
          }}
        />
      </div>
      <Results
        imagesResults={images}
        previousPage={() => {
          let pageNum = page;
          if (pageNum > 1) {
            pageNum -= 1;
            setPage(pageNum);
          } else {
            return null;
          }
        }}
        nextPage={() => {
          let pageNum = page;
          pageNum += 1;
          setPage(pageNum);
        }}
      />
    </div>
  );
}

export default App;
