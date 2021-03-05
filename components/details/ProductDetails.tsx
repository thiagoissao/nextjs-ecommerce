import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  description: {
    color: theme.palette.grey[500],
    textAlign: 'justify',
  },
}));

export type ProductDetailsProps = {
  description: string;
  material: Array<string>;
};

const ProductDetails = ({
  description,
  material,
}: ProductDetailsProps) => {
  const classes = useStyles();

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant='h5' color='textPrimary'>
              <b>Detalhes do Produto</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.description}>
              {description}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant='h5' color='textPrimary'>
              <b>Material do Produto</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              {
                material.map(item => (
                  <Grid item xs={12} key={item}>
                    <Typography className={classes.description}>
                      {`- ${item}`}
                    </Typography>
                  </Grid>
                ))
              }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
