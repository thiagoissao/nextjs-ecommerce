import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SquareFootRoundedIcon from '@material-ui/icons/SquareFootRounded';
import ProductSizes from './ProductSizes';
import WhatsappButton from '../pure/WhatsappButton';
import format from '../../utils/formatters';
import { Size, TshirtColors, TshirtTypes } from '../../interfaces/productsInterface';

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: theme.spacing(3),
    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.secondary.dark}`,
  },
  discount: {
    textDecoration: 'line-through',
    color: theme.palette.grey[500],
  },

}));

export type ProductCardProps = {
  title: string;
  color: TshirtColors;
  type: TshirtTypes;
  price: number;
  priceWithDiscount?: number;
  sizes: Array<Size>;
  whatsappHref: string;
  selectedSize: Size,
  onChangeSize: (size: Size) => void;
};

const ProductCardDetails = ({
  title,
  color,
  type,
  price,
  priceWithDiscount,
  sizes,
  whatsappHref,
  selectedSize,
  onChangeSize,
}: ProductCardProps) => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant='h6' color='textPrimary'>
            <b>{title}</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography color='textPrimary'>
            {`${format.formatTshirtType(type)} - ${format.formatTshirtColor(color)}`}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container alignItems='center' spacing={2}>
            {
              priceWithDiscount && (
                <>
                  <Grid item>
                    <Typography variant='h6' color='textPrimary'>
                      <b>{format.formatNumberToMoneyWithSymbol(priceWithDiscount)}</b>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.discount}>
                      {format.formatNumberToMoneyWithSymbol(price)}
                    </Typography>
                  </Grid>
                </>
              )
            }
            {
              !priceWithDiscount && (
                <Grid item>
                  <Typography variant='h6' color='textPrimary'>
                    {format.formatNumberToMoneyWithSymbol(price)}
                  </Typography>
                </Grid>
              )
            }
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Grid alignItems='center' container justify='space-between'>
                <Grid item>
                  <Typography color='textPrimary'>
                    Tamanho
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid container alignItems='center'>
                    <Grid item>
                      <SquareFootRoundedIcon />
                    </Grid>
                    <Grid item>
                      <Typography color='textPrimary'>
                        Tabela de Tamanhos
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <ProductSizes
                options={sizes}
                selected={selectedSize.value}
                onChange={onChangeSize}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <WhatsappButton target='_blank' href={whatsappHref} />
        </Grid>
        <Grid item xs={12}>
          <Typography color='textPrimary'>
            Frete Grátis para Maringá(PR) e Região
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProductCardDetails;
