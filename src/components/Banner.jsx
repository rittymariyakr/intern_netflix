import React, { useEffect, useState } from 'react'
import './Banner.css'
import instance from '../instance';

//destructuring
function Banner({fetchUrl}) {
    // console.log(fetchUrl);
    const [movie, setMovie] = useState() //creating state for accessing data(data.results) inside fetchData function outside
    const base_url = "https://image.tmdb.org/t/p/original/"

    //api call using async await //we can use any name as function name(fetchData here)
    const fetchData = async ()=>{   //side effect
    const {data} = await instance.get(fetchUrl)
    //to generate random index value or number Math.random is used.// becoz we need only one item at a time from the array of 20 objects, so we generate random index for that
    //then multiply that with maximum limit of that array (ie, data.results.length=> it is the length of the array) // to remove decimal use Math.floor
    setMovie(data.results[Math.floor(Math.random()*data.results.length)]);   //data.results=array of 20 objects//data.results is the array

 }
 console.log(movie);

    //to resolve side effect using useEffect hook
    useEffect (()=>{
        fetchData()
    },[])

  return (
    <div style={{height:'550px', backgroundImage:`url(${base_url}${movie?.backdrop_path})`,
backgroundPosition:'center', backgroundSize:'cover', backgroundAttachment:'fixed'}}>
    <div className="banner-content">
        <h1 className='mb-3'>{movie?.name}</h1>
        <button className='btn btn-danger'>Play <i class="fa-solid fa-play"></i></button>
        <button className='btn border-white ms-3 more'>More Info <i class="fa-solid fa-caret-down"></i></button>
        <h2>{movie?.overview?.slice(0,200)} ...</h2>
    </div>
</div>
  )
}

export default Banner;
