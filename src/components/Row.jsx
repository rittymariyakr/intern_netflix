import React, { useEffect, useState } from 'react'
import instance from '../instance';
import './Row.css'

function Row({title, fetchUrl, isPoster}) { //destructuring the props
  // console.log(fetchUrl);

  const [allMovies , setAllMovies] = useState()  //state declaration
  const base_url = "https://image.tmdb.org/t/p/original/"


  //api call using async await 
  const fetchData = async ()=>{      //side effect happened here due to fetching data
      const {data} = await instance.get(fetchUrl) //({data})- destructuring //all apis are in instance so we use instance.get
      // const {results} = data  //we can again destruture like this //here data is object and results is the key // or wecan use data.results
      //console.log(results);
      setAllMovies(data.results); //this data is inside function . so we can't access it outside so, declare state for using it outside //state is declared at the top
  }
  console.log(allMovies);  //array of 20 items


  //useEffect hook for solving side effect //dependency is given as empty array //Runs only on the first render
   useEffect(()=>{
    fetchData()
   },[] )


  return (
    //jsx code
      <div className='row'>
        <h1>{title}</h1>
        <div className='movie-row'>
            {
            allMovies?.map(item =>(  //allMovies is array here
              //need all the properties of class movie and also if isPoster true then it need class movie_poster properties also. if isPoster false it will get only get movie property
              <img className={`movie ${isPoster && 'movie_poster'}`} src={`${base_url}${isPoster?item.poster_path:item.backdrop_path}`} alt="no image" />
            ))}
        </div>
      </div>
  )
}

export default Row;  
