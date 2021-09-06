import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=0757772f1629d0780bcccfbae5074705&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data)
        setIsLoading(false)
      })
  }, [id])

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Loading..." />
    }
    if (movieDetails) {
        //TODO: Deal with a possible missing image
        const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
        const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
      return (
      <div>
        <Hero text={movieDetails.original_title}  backdrop={backdropUrl}/>
        <div className="container my-5">
            <div className="row">
                <div className="col-md-3">
                    <img src={posterPath} alt="..." className="img-fluid shadow rounded"/>
                </div>
                <div className="col-md-9">
                    <h2>{movieDetails.original_title}</h2>
                    <p className="lead">
                        {movieDetails.overview}
                    </p>
                    <p href=""><strong>Movie Website: </strong><a href="">{movieDetails.homepage}</a></p>
                    <p><strong>Release Date: </strong>{movieDetails.release_date}</p>
                    <p><strong>Rating: </strong>{movieDetails.vote_average}/10</p>
                </div>
            </div>
        </div>
      </div>
      )
    }
  }

  return renderMovieDetails()
};
export default MovieView;
