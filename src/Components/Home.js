// import React from 'react';
import React, { useState, useEffect } from 'react';
import './Home.css'

function Home() {
  const [moviename, setMoviename] = useState("a");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=0d75516b6331a09654e2aa2dddb4a34b&query=${moviename}&original_language=hi`)
      .then(response => response.json())
      .then(data => setData(data.results))
      .catch(error => console.error('Error fetching movies:', error));
  }, [moviename]);

  const handleSearch= (e)=>{
    setMoviename(e.target.value);
  }

  return (
    <>
      <h1> SRI Movies</h1>
     <label > Enter Movie :  <input value={moviename} onChange={handleSearch}  type="text" /></label>
       
          <div className='movieslist'>
            {data.map( (e)=>(
              <div className='mainm'>
              <h3>{e.title}</h3>
              <img className='poster' src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`} alt="poster" />
              <li>Release Date:  {e.release_date}</li>
              <li>Language:  {e.original_language}</li> 
              <li>Rating: {e.rating}</li>

              </div>
            ) )}
          </div>
       
    </>
  );
}

export default Home;