import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import DiscoveryApp from './components/DiscoveryApp';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
});

export default () => {
  return (    
    
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}></StylesProvider>
        <div>
          <Header />
          <DiscoveryApp />
        </div>
      <StylesProvider />
    </BrowserRouter>
    
  );
};