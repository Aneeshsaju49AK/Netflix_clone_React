import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards-20241221T104941Z-001/cards/Cards_data';
import { Link } from 'react-router-dom';


const TitleCards = ({ title, category }) => {
    const [apiData, setApiData] = useState([]);
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDYxNjliNjY4MGIwNjY3MDM2ZmU5ZjU4YzcyYTcyYyIsIm5iZiI6MTcxMjEyOTAzMS44MjYsInN1YiI6IjY2MGQwNDA3ZDZkYmJhMDE3ZDcxYjAxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-1MmfrWKgSJuBML1NzgFXscsjEvKhSWdkn3RUrtMZQE'
        }
    };


    // const cardsRef = useRef();

    // const handleWheel = (event) => {
    //     event.preventDefault();
    //     cardsRef.current.scrollLeft += event.deltaY;
    // };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
            .then(res => res.json())
            .then(res => setApiData(res.results))
            .catch(err => console.error(err));
        // currentRef.current.addEventListener('wheel', handleWheel);

        // Cleanup event listener on unmount

    }, []);
    return (
        <div className='titlecards'>
            <h2>{title ? title : "Popular on Netflix"}</h2>
            <div className="card-list"  >
                {apiData.map((card, index) => (
                    <Link to={`player/${card.id}`} className="card" key={index}>
                        <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.original_title} />
                        <p>{card.original_title || "Untitled"}</p>
                    </Link>
                ))}

            </div>
        </div>
    )
}

export default TitleCards
