function PopularMovies(props){
    return (
        <div className="container">
                <img  className="movie-image" src={props.movie.img}></img>
                <div className="popular-film-info">
                  <p>{props.movie.title}</p>
                  <p>Year: {props.movie.year}</p>
                  <p>{props.movie.directedBy}</p>
                </div>
        </div>
    )
}

export default PopularMovies