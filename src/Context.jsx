import React, {useState, useEffect} from "react"
const Context = React.createContext()
import {enqueueSnackbar } from 'notistack';


function ContextProvider({children}) {
    const [watchList,setWatchList] = useState(
        () => JSON.parse(localStorage.getItem("watchlist")) || []
    )


    //set items to local storage 
    useEffect(() => {
        localStorage.setItem("watchlist",JSON.stringify(watchList))
    },[watchList])


    function addToWatchList(data){ 
        let isExist = watchList.some(filmList => filmList["imdbID"] === data.imdbID); 
        let message =  isExist ? 'Already in watchlist' : 'Added to watchlist'
        let variant = isExist ? 'error' : "success"
        let snackbar = enqueueSnackbar(message,{anchorOrigin:{ vertical: 'bottom', horizontal: 'right' },variant: variant})  
        if(isExist){
            snackbar
        }else{
            setWatchList(prevWatchList => [data,...prevWatchList])
            snackbar
        }
        
    }


    function removeFromWachList(id){
        setWatchList(prevWatchList => prevWatchList.filter(item => item.imdbID !== id))
        enqueueSnackbar("Removed from watchlist",{anchorOrigin:{ vertical: 'bottom', horizontal: 'right' },variant:'info'})  
    }
    

    return (
        <Context.Provider value={{addToWatchList,removeFromWachList,watchList}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}

