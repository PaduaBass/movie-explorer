import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import api from '../../services/api';
import { DiscoverMovie, RequestDiscoverMovie, RequestDetailsMovie } from '../interfaces';

// import { Container } from './styles';
interface MovieContext {
    movies: null | RequestDiscoverMovie;
    selectedMovie: null | RequestDetailsMovie;
    getData(): Promise<void>;
    plusMovie(): Promise<void>;
    selectMovie(id: number): Promise<void>;
    resetMovieSelected(): void;
}

const MovieContext = createContext<MovieContext>({} as MovieContext);

const MovieProvider: React.FC = ({ children }) => {
    const [movies, setMovies] = useState<null | RequestDiscoverMovie>(null);
    const [selectedMovie, setSelectedMovie] = useState<null | RequestDetailsMovie>(null);
    const [page, setPage] = useState(2);
    const getData = async () => {
        console.log('chamando')
        const response = await api.get("/discover/movie?api_key=b7b1762c97b44651d52bbe7e7fc52f09&language=pt");
        setMovies(response.data);
        
    };

    const plusMovie = async () => {
        const response = await api.get(`/discover/movie?api_key=b7b1762c97b44651d52bbe7e7fc52f09&language=pt&page=${page}`);
        console.log(page);
        if(movies && movies.results){
            const moviesResult = movies;
            const { results } = response.data;
            results.map((result: DiscoverMovie) => moviesResult.results.push(result))
            setPage(page + 1);
            setMovies(moviesResult);
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

    return <MovieContext.Provider value={{ movies, getData, plusMovie, selectMovie, selectedMovie, resetMovieSelected }}>
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