import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import React from "react";

const products = [{
  name: "Pencil",
  price: 1,
}, {
  name: "Pen",
  price: 2,
}, {
  name: "Ruler",
  price: 3,
}];

export const ProductListing = () => {
  return (
    <Grid container spacing={2}>
      {products.map((product, index) => (
        <Grid item key={index}>
            <Card>
              <Typography>
                {product.name}
              </Typography>
              <Button>
                Add to Cart
              </Button>
            </Card>
        </Grid>
      ))}
    </Grid>
  )
};

export default ProductListing;