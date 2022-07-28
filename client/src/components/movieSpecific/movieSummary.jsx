import React, { useState, useEffect, useReducer } from "react";
import { summaryFinder, posterFinder, providerFinder } from '../../../../server/controllers/movieSummaryHelper.js'
import './movieSum.css';
import costs from "./providersCost.js";
import { FaShare } from 'react-icons/fa';
import {FcLike,FcBookmark} from 'react-icons/fc';

export default function Moviesumm() {
    const [movieTitle, changeTitle] = useState('Avengers');
    const [movieDetail, changeDetail] = useState('');
    const [moviePoster, changePoster] = useState(null);
    const [movieProviders, changeProvider] = useState([]);
    // const options = {};
    // const series = [84, 16];
    // const labels = ['A', 'B']; 
    // useEffect(() => {
    //     fetch(`https://api.themoviedb.org/3/search/movie?api_key=e066819a2f669fa15e8e97c4a23c8075&query=${movieTitle}`)
    //     .then((res) => res.json())
    //     .then((data) => changeDetail(data.results[0].overview));
    // })
    useEffect(() => {
        posterFinder(movieTitle)
            .then(res => {
                changePoster(res)
            })
    }, [movieTitle])
    useEffect(() => {
        summaryFinder(movieTitle)
            .then(res => {
                // console.log(res);
                changeDetail(res)
            })
    }, [movieTitle])
    useEffect(() => {
        providerFinder(movieTitle)
            .then(res => {
                changeProvider(res)
            })
    }, [movieTitle])

    { console.log(Object.keys(costs), 'costss') }
    return (
        <div className="container">
            <div className="posterandprovider">
                <img src={moviePoster} className="moviePoster" />
                {movieProviders ? <div className="providersBox">
                    {movieProviders.map((provider) => {
                        console.log(provider.provider_name)
                        return (
                            Object.keys(costs).includes(provider.provider_name) ?
                                <div key={provider.provider_id}> {provider.provider_name}&nbsp;
                                    <img src={`https://image.tmdb.org/t/p/w500/${provider.logo_path}`} className='providerLogo' />
                                    &nbsp;<a> ${costs[provider.provider_name]}</a>
                                </div> : null
                        )
                    })}</div> : <div> Not Available for Streaming</div>}
            </div>
            <div className="movieInfo">
                <h1 className="movieTitle">
                    {movieTitle}
                </h1>
              
                {/* <span className="like">&#10084; </span>
                <span className="favorite"> &#128278;</span>
                <span className="share">&lt;</span> */}
                <span className="actionBar"> 
                <FaShare className="share"/>
                <FcLike  className="like"/>
                <FcBookmark className="bookmark"/>
                    </span> 
                <div className="starRating">
                    {/* <Stars rating={7.5} /> */}
                    {'Score : 75%'}
                </div>
                <h2> Overview </h2>
                <p>{movieDetail === '' ? null : movieDetail} </p>
            </div>

            {/* <a> {movieDetail}</a> */}
        </div>
    )
}