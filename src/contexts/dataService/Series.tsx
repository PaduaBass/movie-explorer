import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import api from '../../services/api';
import { DiscoverMovie, RequestDiscoverMovie } from '../interfaces';

// import { Container } from './styles';
interface TvContext {
    series: null | RequestDiscoverMovie;
    getDataSeries(): Promise<void>;
    plusSeries(): Promise<void>;
    getSeriesGenre(genre: string): Promise<void>;
}

const SeriesContext = createContext<TvContext>({} as TvContext);

const SeriesProvider: React.FC = ({ children }) => {
    const [series, setSeries] = useState<null | RequestDiscoverMovie>(null);
    const [selectedSerie, setSelectedSerie] = useState(null);
    const [page, setPage] = useState(2);
    const getDataSeries = async () => {
        const response = await api.get("/discover/tv?api_key=b7b1762c97b44651d52bbe7e7fc52f09&language=pt");
        setSeries(response.data);
    };

    const getSeriesGenre = async (genre: string) => {
        if(genre !== 'Todos') {
            const seriesRequest = await api.get(`/search/tv?api_key=b7b1762c97b44651d52bbe7e7fc52f09&language=pt&query=${genre}`);
            if(seriesRequest.data.results.length > 0) {
                setSeries(seriesRequest.data)
            }
        } else {
            getDataSeries();
        }
    }

    const plusSeries = async () => {
        const response = await api.get(`/discover/tv?api_key=b7b1762c97b44651d52bbe7e7fc52f09&language=pt&page=${page}`);
        if(series && series.results){
            const seriesResult = series;
            const { results } = response.data;
            results.map((result: DiscoverMovie) => seriesResult.results.push(result))
            setPage(page + 1);
            setSeries(seriesResult);
        }
    }

    useEffect(() => {
        getDataSeries();
    },[])
    return <SeriesContext.Provider value={{ series, getDataSeries, plusSeries, getSeriesGenre }}>
        { children }
    </SeriesContext.Provider>;
}

function useSeriesContext() {
    const context = useContext(SeriesContext);
    if (!context) {
        throw new Error('Movie Context not Found!');
    }
    return context;
}

export { SeriesProvider, useSeriesContext }; 