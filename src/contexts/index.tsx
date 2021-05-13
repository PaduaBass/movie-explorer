import React from 'react';
import { MovieProvider } from './dataService/Movie';
import { SeriesProvider } from './dataService/Series';
import { DrawerProvider } from './components/DrawerContext';
const GlobalContext: React.FC = ({ children }) => {
  return <MovieProvider>
    <SeriesProvider>
      <DrawerProvider>
        {children}
      </DrawerProvider>
    </SeriesProvider>
  </MovieProvider>;
}

export default GlobalContext;