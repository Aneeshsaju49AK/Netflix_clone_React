import React, { useEffect, useState } from 'react'
import './Player.css'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key :"",
    published_at:"",
    typeof: ""
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDYxNjliNjY4MGIwNjY3MDM2ZmU5ZjU4YzcyYTcyYyIsIm5iZiI6MTcxMjEyOTAzMS44MjYsInN1YiI6IjY2MGQwNDA3ZDZkYmJhMDE3ZDcxYjAxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-1MmfrWKgSJuBML1NzgFXscsjEvKhSWdkn3RUrtMZQE'
    }
  };
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])
  
  return (
    <div className='player'>
      <img src="https://img.youtube.com/vi/YQQD67N5pi0/maxresdefault.jpg" alt="hlo" onClick={()=>{navigate(-2)}} />
      <iframe
        width="90%"
        height="90%"
      src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        allowFullScreen
        frameBorder="0"
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
