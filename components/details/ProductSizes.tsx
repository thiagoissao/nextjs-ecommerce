import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Size } from '../../interfaces/productsInterface';

const useStyles = makeStyles(theme => ({
  button: {
    boxShadow: 'none',
    borderRadius: theme.spacing(3),
    '&:hover': {
      boxShadow: 'none',
    },
  },
}));

export type ProductSizesProps = {
  onChange: (size: Size) => void,
  selected: string | number,
  options: Array<Size>;
};

const ProductSizes = ({
  onChange,
  selected,
  options,
}: ProductSizesProps) => {
  const classes = useStyles();

  return (
    <Grid container spacing={1}>
      {
        options.map(option => (
          <Grid item key={option.value}>
            <Button
              size='large'
              className={classes.button}
              color='primary'
              variant={selected === option.value ? 'contained' : 'outlined'}
              disabled={option.disabled}
              onClick={() => onChange(option)}
            >
              {option.label}
            </Button>
          </Grid>
        ))
      }
    </Grid>
  );
};

export default ProductSizes;
