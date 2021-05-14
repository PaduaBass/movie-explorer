import React from 'react';
import { MovieProvider } from './dataService/Movie';
import { SeriesProvider } from './dataService/Series';
import { DrawerProvider } from './components/DrawerContext';
import { SerchProvider } from './dataService/Search';
const GlobalContext: React.FC = ({ children }) => {
  return <MovieProvider>
    <SeriesProvider>
      <DrawerProvider>
        <SerchProvider>
          {children}
        </SerchProvider>
      </DrawerProvider>
    </SeriesProvider>
  </MovieProvider>;
}

export default GlobalContext;