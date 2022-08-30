import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

export default function Homepage() {

  return (
    <React.Fragment>
      <main>
        <div>I'm the homepage!</div>
          <Grid item>
            <Link to="/products">
              <Button variant="contained" color="primary">
                Products
              </Button>
            </Link>
          </Grid>
      </main>
    </React.Fragment>
  );
};