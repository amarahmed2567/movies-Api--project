import React,{useState,useEffect} from "react";
import MoviesCard from "./components/moviesCard";
import Search from './img/searching.png'
//http://www.omdbapi.com
//2d2c9b16

const API = "http://www.omdbapi.com?apikey=2d2c9b16"
const App = ()=>{

        const [movies,setMovies]=useState([])
        const [searchValue,setsearchValue]=useState('Batman')
    
    useEffect(()=>{
        MoveisApi(searchValue);
    },[])



        const MoveisApi = async (title)=>{

            const respons =await fetch(`${API}&s=${title}`);
            const data = await  respons.json();
            // console.log(data.Search)
            setMovies(data.Search)
        }
return(
    <div className="contenar-movies">

        <div className="text-header">maroco movies </div>

        <div className="searchContenar">
            <input placeholder="search.." onChange={(e)=>setsearchValue(e.target.value)}/>
            <img className="search" src={Search} alt='search' onClick={()=> MoveisApi(searchValue)}/>
        </div>


    <div className="contenar">
    {
    movies?.length > 0 ?(
        movies.map((movie)=>{
            return(
                <MoviesCard movies={movie}/>
            )
        })
    ):
    (
        <div className="empty">
        <h2>No movies found</h2>
        </div>
    )
}
    </div>

    </div>
)
}

export default App