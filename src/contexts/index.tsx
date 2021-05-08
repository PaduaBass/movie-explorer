import React from 'react';
import { MovieProvider } from './dataService/Movie';
import { SeriesProvider } from './dataService/Series';
const GlobalContext: React.FC = ({ children }) => {
  return <MovieProvider>
    <SeriesProvider>
      {children}
    </SeriesProvider>
  </MovieProvider>;
}

export default GlobalContext;