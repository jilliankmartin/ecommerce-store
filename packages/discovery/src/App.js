import React from "react";
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {StylesProvider} from '@material-ui/core/styles';

import Homepage from "./components/Homepage";
import ProductListing from "./components/ProductListing";

export default () => {
  return <div>
    <StylesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/products" component={ProductListing} />
          <Route path ="/" component={Homepage} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  </div>
};