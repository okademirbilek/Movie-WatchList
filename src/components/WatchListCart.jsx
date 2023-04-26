import  {useContext} from "react"
import {Context} from "../Context"

function WatchListCart(props) {
  const {filmData} = props
  const {removeFromWachList} = useContext(Context)
  return (
    <>
        <div className="film-container">
            <img className="movie-image" src={filmData.Poster}></img>
            <div className="film-info">
                <div className="film-name">
                    <h3>{filmData.Title}</h3>
                    <p>⭐</p>
                    <h5>{filmData.imdbRating}</h5>
                </div>
                        
                <div className="film-genre">
                    <h4>{filmData.Runtime}</h4>
                    <h5>{filmData.Genre}</h5>
                </div>
                <div className="btn-container">
                    <button 
                        id="remove-btn"
                        onClick={() => removeFromWachList(filmData.imdbID)}

                    ></button>
                    <h6>Remove</h6>
                </div>
            </div> 
            <div className="film-plot">
                <p>{filmData.Plot}</p>   
            </div>      
        </div>
        <hr></hr>
    </> 
  )
}


export default WatchListCart