import React from "react";
import {Switch, Route, Router} from 'react-router-dom';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';

import Homepage from "./components/Homepage";
import ProductListing from "./components/ProductListing";

const generateClassName = createGenerateClassName({
  productionPrefix: 'da'
});

export default ({history}) => {
  return <div>
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history} >
        <Switch>
          <Route exact path="/products" component={ProductListing} />
          <Route path ="/" component={Homepage} />
        </Switch>
      </Router>
    </StylesProvider>
  </div>
};