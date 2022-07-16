import React, {useState, useEffect} from "react";
import {summaryFinder,posterFinder} from '../../../server/controllers/movieSummaryHelper.js'

export default function Moviesumm() {
    const [movieTitle, changeTitle] = useState('Full Throttle');
    const [movieDetail, changeDetail] = useState('');
    const [moviePoster, changePoster] = useState(null);
    // useEffect(() => {
    //     fetch(`https://api.themoviedb.org/3/search/movie?api_key=e066819a2f669fa15e8e97c4a23c8075&query=${movieTitle}`)
    //     .then((res) => res.json())
    //     .then((data) => changeDetail(data.results[0].overview));
    // })
    useEffect(()=> {
        summaryFinder(movieTitle)
        .then(res => {
            // console.log(res);
            changeDetail(res)
        }
            )
        // console.log(movieTitle)
        // async() =>{
        //     await changeDetail( summaryFinder(movieTitle));           
        // } 
  
    })
    useEffect(()=> {
        posterFinder(movieTitle)
        .then(res => {
            changePoster(res)
        })
    })
    return (
        <div>
        <h1> 
            {movieTitle}
        </h1>
       <a>{movieDetail === '' ? null : movieDetail} </a>
       <div> </div>
       <img src={moviePoster} />

       {/* <a> {movieDetail}</a> */}
        </div> 
    )
}