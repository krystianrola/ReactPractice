import React, {  useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";


function Banner() {
    const [movie, setMovie] = useState([]);
    const [description, setDescription] = useState("");

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);

            setMovie( 
                request.data.results[ Math.floor(Math.random() * request.data.results.length -1) ]
            )

            return request;
        }

        fetchData();
    }, []);
    
    console.log(movie)

    function truncate (string, number){
        return string?.length > number ? string.substr(0, number - 1) + ' ...' : string ;  
    }

    // black banner 
    // https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
            {
                truncate(description, 150)
            }
        </h1>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
}

export { Banner };
