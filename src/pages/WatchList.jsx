import  {useContext} from "react"
import {Context} from "../Context"
import {Link} from "react-router-dom"
import WatchListCart from "../components/WatchListCart"

function WatchList(){
    const {watchList} = useContext(Context)

    const watchListElement = watchList.map(movie => {
        return (<WatchListCart key={movie.imdbID} filmData={movie}/>)
    })
    

    return (
        <>
            { watchList.length === 0  ? 
            <div className="empty-watchlist">
                <p>Your watchlist is looking a little empty...</p>
                <span className="add-btn-container">
                    <Link to="/">
                        <h6 id="add-btn-link"></h6> 
                    </Link>
                <h5>Lets add some movies!</h5>
                </span>
            </div>
            :watchListElement
           }
        </>
        
    )
}

export default WatchList