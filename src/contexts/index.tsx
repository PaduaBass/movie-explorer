import React from 'react';
import { MovieProvider } from './dataService/Movie';
import { SeriesProvider } from './dataService/Series';
import { DrawerProvider } from './components/DrawerContext';
import { SerchProvider } from './dataService/Search';
import { GenresProvider } from './dataService/Genres';
import { AnimationProvider } from './controls/AnimationContext';
const GlobalContext: React.FC = ({ children }) => {
  return <MovieProvider>
    <SeriesProvider>
      <GenresProvider>
        <DrawerProvider>
          <SerchProvider>
            <AnimationProvider >
            {children}
            </AnimationProvider>
          </SerchProvider>
        </DrawerProvider>
      </GenresProvider>
    </SeriesProvider>
  </MovieProvider>;
}

export default GlobalContext;