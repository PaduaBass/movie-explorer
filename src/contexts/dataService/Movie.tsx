import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import api from '../../services/api';
import { RequestDiscoverMovie } from '../interfaces';

// import { Container } from './styles';
interface MovieContext {
    movies: null | RequestDiscoverMovie;
    getData(): Promise<void>;

}

const MovieContext = createContext<MovieContext>({} as MovieContext);

const MovieProvider: React.FC = ({ children }) => {
    const [movies, setMovies] = useState<null | RequestDiscoverMovie>(null);
    const getData = async () => {
        console.log('chamando')
        const response = await api.get("/discover/movie?api_key=b7b1762c97b44651d52bbe7e7fc52f09");
        setMovies(response.data);

    };



    return <MovieContext.Provider value={{ movies, getData }}>
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