import React from "react";
import { Navigate , Link, } from "react-router-dom";
import { useEffect, useState} from "react";
import axios from "axios";
import swal from "@sweetalert/with-react";

function Listado(){

    const token = localStorage.getItem('token');
    // const token = sessionStorage.getItem('token');
    
    const [movieList, setMovieList] = useState([]);

    useEffect(()=>{
        const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=ec3520b08d088822beecc9accaf9a4b0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
        axios.get(endPoint)
            .then(response =>{
                const apiData = response.data.results;
                setMovieList(apiData)  
            })
            .catch(error=>{
                swal(<h2>Posibles errores, intenta mas tarde</h2>)
            })
    },[setMovieList]);

    console.log(movieList)

    return(
        <>
            {!token && <Navigate to='/' />}
       
            <div className="row">
                { 
                    movieList.map((oneMovies, idx)=>{
                        return (
                            <div className="col-3" key={idx}>
                                <div className="card my-4">
                                    <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${oneMovies.poster_path}`} alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{oneMovies.original_title}</h5>
                                        <p className="card-text">{oneMovies.overview.substring(0,100)}</p>
                                        <Link to={`/detalle?movieID=${oneMovies.id}`} className="btn btn-primary">View Detail</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Listado;