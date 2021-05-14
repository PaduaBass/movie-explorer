import React, { createContext, useContext, useState } from 'react';
import api from '../../services/api';

// import { Container } from './styles';
interface SearchContextProps {
    search: any;
    getSearch(query: string): Promise<void>;
}
const SearchContext = createContext<SearchContextProps>({} as SearchContextProps);
const SerchProvider: React.FC = ({ children }) => {
    const [search, setSearch] = useState([]);
    const getSearch = async (query: string) => {
        const response = await api.get(`/search/multi?api_key=b7b1762c97b44651d52bbe7e7fc52f09&language=pt&query=${query}`);
        setSearch(response.data);
    }
    return <SearchContext.Provider value={{ search, getSearch }}>
        { children }
    </SearchContext.Provider>;
}

function useSearchContext () {
    const context = useContext(SearchContext);
    if(!context) throw new Error('Not context search');
    return context;
}

export { SerchProvider, useSearchContext };
