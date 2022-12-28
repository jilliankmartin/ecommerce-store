import React from "react";
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';

import Homepage from "./components/Homepage";
import ProductListing from "./components/ProductListing";

const generateClassName = createGenerateClassName({
  productionPrefix: 'da'
});

export default () => {
  return <div>
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/products" component={ProductListing} />
          <Route path ="/" component={Homepage} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  </div>
};