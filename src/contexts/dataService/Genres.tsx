import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import api from '../../services/api';

// import { Container } from './styles';
interface GenreContextProps {
    genresMovie: any;
    genresTv: any;
    getGenres(): Promise<void>;
}


interface Genre {
    id: number;
    name: string;
}
const GenresContext = createContext<GenreContextProps>({} as GenreContextProps);
const GenresProvider: React.FC = ({ children }) => {
    const [genresMovie, setGenresMovie] = useState<Genre[]>([]);
    const [genresTv, setGenresTv] = useState([]);

    const getGenres = useCallback(async() => {
        const responseMovie = await api.get(`/genre/movie/list?api_key=b7b1762c97b44651d52bbe7e7fc52f09&language=pt`);
        const { genres } = responseMovie.data;
        genres.unshift({ id: -1, name: 'Todos' })
        setGenresMovie(Object.values(genres));
    },[]);

    useEffect(() => {
        getGenres();
    },[])
    return <GenresContext.Provider value={{ genresMovie, genresTv, getGenres }}>
        { children }
    </GenresContext.Provider>;
}

function useGenresContext() {
    const context = useContext(GenresContext)
    if (!context) throw new Error('Not found Genre context');
    return context;
}

export { GenresProvider, useGenresContext, Genre };