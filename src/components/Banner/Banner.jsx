
import React, { useEffect, useState } from 'react'
import axios from '../../utils/axios';
import requests from '../../utils/requests';
import './Banner.css'

const Banner = () => {
    const [movie, setMovie] = useState({});
    useEffect(() =>{
        (async ()=> {
            try{
                const request = await axios.get (requests.fetchNetflixOriginals)
                setMovie(
                    request.data.results [
                    Math.floor(Math.random() * request.data.results.length)]
                );
            } catch (error){
                // console.log("Error fetching data", error);
            }
        })()
    },[]); 

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n -1) + '...' : str;
        
    }
    // const truncate = (str, maxLength) => {
    //     if (!str) return"";
    //     return str?.length > maxLength ? `${str.substring(0, maxLength)}...`: str;
    // };
    
  return (
    <>
    <div className='banner'
    style= {{
        backgroundSize: "cover",
        backgroundImage: movie?.backdrop_path 
        ?`url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')` 
        : "url(https://via.placeholder.com/1200x600)",//
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }}
    >
        <div className='banner_contents'>
            <h1 className='banner_title'>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className='banner_buttons'> 
                <button className='banner_button play'>Play</button>
                <button className='banner_button'>My List</button>
            </div>
            <h1 className='banner_description'>
                {truncate(movie?.overview, 150)}</h1>
        </div>
        <div className='banner_fadeBottom'>

        </div>

    </div>

    </>
  )
}

export default Banner