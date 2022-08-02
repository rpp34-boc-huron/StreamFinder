import React, { useState, useEffect } from "react";
import './movieSum.css';
import costs from "./providersCost.js";
import { FaShare } from 'react-icons/fa';
import { FcLike, FcBookmark } from 'react-icons/fc';
const axios = require('axios');
import MovieSpecific2 from '../movieSpecific-2/MovieSpecific2';

export default function Moviesumm({movieId, handleClick}) {
    // const [movieId, setMovieId] = props;
    const [movieTitle, changeTitle] = useState('The Godfather');
    const [movieDetail, changeDetail] = useState('');
    const [moviePoster, changePoster] = useState(null);
    const [movieProviders, changeProvider] = useState([]);
    const [movieScore, changeScore] = useState(null);

    const getPoster = async () => {
        try {
            const { data } = await axios.get(`/poster/${movieId}`);
            changePoster(data);
        } catch (err) {
            console.error('get poster error', err);
        }
    }

    const getSummary = async () => {
        try {
            const { data } = await axios.get(`/summary/${movieId}`);
            changeDetail(data.overview);
            changeScore(data.vote_average.toFixed(1));
            changeTitle(data.original_title);
        } catch (err) {
            console.error('get summary error', err);
        }
    }

    const getProviders = async () => {
        try {
            const { data } = await axios.get(`/providers/${movieId}`);
            changeProvider(data);
        } catch (err) {
            console.error('get providers error', err);
        }
    }

    useEffect(() => {
        getPoster();
        getSummary();
        getProviders()
    }, [movieId]);

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     const movieId = e.target.id;
    //     setMovieId(movieId);
    // }

    return (
        <>
            <div className="container">
                <div className="posterandprovider">
                    <img src={moviePoster} className="moviePoster" />
                    {movieProviders ? <div className="providersBox">
                        {movieProviders.map((provider) => {
                            return (
                                Object.keys(costs).includes(provider.provider_name) ?
                                    <div key={provider.provider_id}> {provider.provider_name}&nbsp;
                                        <img src={`https://image.tmdb.org/t/p/w500/${provider.logo_path}`} className='providerLogo' />
                                        &nbsp;<a> ${costs[provider.provider_name]} per month</a>
                                    </div> :
                                    <div key={provider.provider_id}>
                                        {provider.provider_name} &nbsp;
                                        <img src={`https://image.tmdb.org/t/p/w500/${provider.logo_path}`} className='providerLogo' />
                                    </div>
                            )
                        })}</div> : <div> Not Available for Streaming</div>}
                </div>
                <div className="movieInfo">
                    <h1 className="movieTitle">
                        {movieTitle}
                    </h1>


                    <span className="actionBar">
                        <FcLike className="like" />
                        <FcBookmark className="bookmark" />
                        <FaShare className="share" />
                    </span>
                    <div className="starRating">
                        {`Score : ${movieScore}`} 
                    </div>
                    <h2> Overview </h2>
                    <p>{movieDetail === '' ? null : movieDetail} </p>
                </div>
            </div>
            <MovieSpecific2
                movieId={movieId}
                handleClick={handleClick} />
        </>
    )
}