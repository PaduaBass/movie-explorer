import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import api from '../../services/api';
import { DiscoverMovie, RequestDiscoverMovie, RequestDetailsMovie } from '../interfaces';

// import { Container } from './styles';
interface MovieContext {
    movies: null | RequestDiscoverMovie;
    moviesTopRated: null | RequestDiscoverMovie;
    selectedMovie: null | RequestDetailsMovie;
    genreMovie: string;
    images: string[];
    getData(): Promise<void>;
    plusMovie(): Promise<void>;
    selectMovie(id: number): Promise<void>;
    resetMovieSelected(): void;
    plusMovieTopRated(): Promise<void>;
    getMoviesGenre(genre: string): Promise<void>;
}

const MovieContext = createContext<MovieContext>({} as MovieContext);

const MovieProvider: React.FC = ({ children }) => {
    const [movies, setMovies] = useState<null | RequestDiscoverMovie>(null);
    const [moviesTopRated, setMoviesTopRated] = useState<null | RequestDiscoverMovie>(null);
    const [selectedMovie, setSelectedMovie] = useState<null | RequestDetailsMovie>(null);
    const [page, setPage] = useState(2);
    const [pageTopRated, setPageTopRated] = useState(2);
    const [genreMovie, setGenreMovie] = useState('Todos');
    const [images, setImages] = useState<string[]>([]);

    const getData = async () => {
        console.log('chamando')
        const movieRequest = await api.get("/discover/movie?api_key=b7b1762c97b44651d52bbe7e7fc52f09&language=pt");
        const movieTopRatedRequest = await api.get("/movie/top_rated?api_key=b7b1762c97b44651d52bbe7e7fc52f09&language=pt");
        
        setMoviesTopRated(movieTopRatedRequest.data);
        setMovies(movieRequest.data);
        const images = [];
        for(var i = 0; i <= 6; i++) {
            images.push(`http://image.tmdb.org/t/p/w500/${moviesTopRated?.results[i].poster_path}`)
        }
        setImages(images)
        console.log(images)
    };

    const getMoviesGenre = async (genre: string) => {
        setGenreMovie(genre);
        if(genre !== 'Todos') {
            const movieRequest = await api.get(`/search/movie?api_key=b7b1762c97b44651d52bbe7e7fc52f09&language=pt&query=${genre}`);
            if(movieRequest.data.results.length > 0) {
                setMovies(movieRequest.data)
            }
        } else {
            getData();
        }
    }

    const plusMovie = async () => {
        const response = await api.get(`/discover/movie?api_key=b7b1762c97b44651d52bbe7e7fc52f09&language=pt&page=${page}`);
        if(movies && movies.results){
            const moviesResult = movies;
            const { results } = response.data;
            results.map((result: DiscoverMovie) => moviesResult.results.push(result))
            setPage(page + 1);
            setMovies(moviesResult);
        }
    }

    const plusMovieTopRated = async () => {
        const response = await api.get(`/movie/top_rated?api_key=b7b1762c97b44651d52bbe7e7fc52f09&language=pt&page=${pageTopRated}`);
        console.log(page);
        if(moviesTopRated && moviesTopRated.results){
            const moviesResult = moviesTopRated;
            const { results } = response.data;
            results.map((result: DiscoverMovie) => moviesResult.results.push(result))
            setPageTopRated(page + 1);
            setMoviesTopRated(moviesResult);
        }
    }

    const selectMovie = async (id: number) => {
        const response = await api.get(`/movie/${id}?api_key=b7b1762c97b44651d52bbe7e7fc52f09&language=pt`);
        setSelectedMovie(response.data);
    }

    const resetMovieSelected = () => {
        if(selectedMovie) {
            setSelectedMovie(null)
        }
    }  
    useEffect(() => {
        getData()
    },[])

    return <MovieContext.Provider value={{ images, movies, getData, plusMovie, selectMovie, selectedMovie, resetMovieSelected, moviesTopRated, plusMovieTopRated, genreMovie, getMoviesGenre }}>
        { children }
    </MovieContext.Provider>;
}

function useMovieContext() {
    const context = useContext(MovieContext);
    if (!context) {
        throw new Error('Movie Context not Found!');
    }
    return context;
}

export { MovieProvider, useMovieContext }; 