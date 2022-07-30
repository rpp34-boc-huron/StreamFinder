import React, { useState, useEffect } from "react";
import { summaryFinder, posterFinder, providerFinder } from '../../../../server/controllers/movieSummaryHelper.js'
import './movieSum.css';
import costs from "./providersCost.js";
import { FaShare } from 'react-icons/fa';
import { FcLike, FcBookmark } from 'react-icons/fc';

export default function Moviesumm() {
    const [movieTitle, changeTitle] = useState('The Godfather');
    const [movieDetail, changeDetail] = useState('');
    const [moviePoster, changePoster] = useState(null);
    const [movieProviders, changeProvider] = useState([]);
    const [movieScore, changeScore] = useState(null);

    useEffect(() => {
        posterFinder(movieTitle)
            .then(res => {
                changePoster(res)
            })
    }, [movieTitle]);
    useEffect(() => {
        summaryFinder(movieTitle)
            .then(res => {
                console.log(res);
                changeDetail(res.overview)
                changeScore(res.vote_average.toFixed(1))
            })
    }, [movieTitle]);
    useEffect(() => {
        providerFinder(movieTitle)
            .then(res => {
                changeProvider(res)
            })
    }, [movieTitle]);
    // { console.log(Object.keys(costs), 'costss') }
    return (
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
    )
}