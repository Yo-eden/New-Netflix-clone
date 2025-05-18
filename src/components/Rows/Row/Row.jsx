import React, { useEffect, useState } from 'react'
import "./Row.css";
import axios from '../../../utils/axios';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const base_url = "https://image.tmdb.org/t/p/original";
    useEffect(() =>{
        async function fetchData(){
            try {
                // console.log(fetchUrl);
                const request = await axios.get (fetchUrl);
                console.log(request)
                setMovies(request.data.results);
            } catch (error) {
                // console.log("error", error);
            }
        } 
        fetchData();
    },[fetchUrl]);

    const handleClick = async (movie) =>{
        if (trailerUrl){
            setTrailerUrl('');
        } else {
            try {
            const url = await movieTrailer(movie?.title || movie?.name ||movie?.original_name || '');
            // .then ((url) => {
                // console.log(url);
                const urlParams = new URLSearchParams (new URL(url).search);
                // console.log(urlParms);
                // console.log(urlParams.get('v'));
                setTrailerUrl(urlParams.get('v'));
            }catch (error) {
                console.error ('Error fetching trailer', error);
            }
        }
    };

    const opts = {
        height: `390`,
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };
  return (
    <>
    <div className='row'>
        <h1>{title}</h1>
        <div className='row_posters'>
            {movies?.map((movie, index) => (
            <img 
            onClick={() => handleClick(movie)}
            key={index} 
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
            alt={ movie.title || movie.name || movie.original_name} 
            className={`row_poster ${isLargeRow && "row_posterLarge" }`}
            />
        ))}
        </div>
        <div style={{ padding: `40px`}}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    </div>
    </>
  )
}

export default Row