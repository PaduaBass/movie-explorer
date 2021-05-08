import React from 'react';
import { MovieProvider } from './dataService/Movie';
const GlobalContext: React.FC = ({ children }) => {
  return <MovieProvider>
     { children }
  </MovieProvider>;
}

export default GlobalContext;