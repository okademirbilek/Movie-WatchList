import  {useState} from "react"


const apiKey=import.meta.env.VITE_REACT_APP_OMDB_KEY;


function SearchBar(props){
  const [query,setQuery] = useState("")
  const [loading,setLoading]=useState(false)

  function handleChange(event) {
    const {value} = event.target
    setQuery(value)  
  }

  const handleSubmit = async (event) =>  {
    event.preventDefault()
    //changing cursor state
    setLoading(true)
    props.setIsShown(true)
    const currentPage =1;
    let movieID = [];
    const allFilms = []

    //fetching data
    // const response = await fetch(`https://omdbapi.com/?s=${query}&apikey=${apiKey}&page=${currentPage}`);
    const response = await fetch(`https://omdbapi.com/?apikey=${apiKey}&s=${query}&page=${currentPage}&type=movie`);
    const data = await response.json();

    //page calculation
    console.log("number of movies",data.totalResults);
    let numberOfPage=Math.ceil((data.totalResults / 10));
    console.log("number of page we need",numberOfPage);

    //Catching error if there is an incorrect search
    if (data.Response === "False") {
        props.setIsDataReturn(false)
        setLoading(false)
    } else {
        props.setIsDataReturn(true)
        //Pushing Data to movie id array we have to hold all the film imdbID's because 
        //We cannot reach film data with a name search.
        // console.log(data.Search)
        for (let film of data.Search) {
            // setMovieId(prevMovie => [...prevMovie,film.imdbID])
            movieID.push(film.imdbID)
        };

        console.log(movieID);

        for (let filmID of movieID) {
            await fetch(`https://omdbapi.com/?apikey=${apiKey}&i=${filmID}`)
                .then((res) => {
                console.log(res.ok)
                if (!res.ok) {
                    throw Error(res.status,res.ok)
                }
                return res.json()
                })
                .then((filmData) => {
                     allFilms.push(filmData)
                }).catch(err => console.error(err))
        }; 
        props.setAllMovies(allFilms)
        setLoading(false)
    };    
  }
  

  return (
      <section className="search-bar-container">
        <form id="search-form" onSubmit={handleSubmit}>
            <div className="search-bar">
              <i className="fa fa-search"></i>
                <input  
                  id="movie-name" 
                  type="text" 
                  placeholder="Search a movie" 
                  onChange={handleChange}
                  value={query}
                  required>
                </input>  
            </div> 
            <button id="search-btn" type="submit" disabled={loading}>Search</button> 
        </form>
      </section> 
  )
}

export default SearchBar