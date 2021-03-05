import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Image from 'next/image';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Hidden from '@material-ui/core/Hidden';
import * as R from 'ramda';
import clsx from 'clsx';
import useWidth from '../../hooks/useWidth';
import strings from '../../utils/strings';
import { TShirtListItemInterface } from '../../interfaces/productsInterface';
import Link from '../pure/Link';

const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.spacing(3),
  },
  cardActionArea: {
    height: '100%',
  },
  image: {
    transition: 'transform 0.4s',
    '&:hover': {
      transform: 'scale(1.2)',
    },
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  button: {
    height: theme.spacing(6),
    borderRadius: theme.spacing(3),
    backgroundColor: theme.palette.primary.main,
  },
  arrowIcon: {
    fontSize: theme.spacing(3),
    color: theme.palette.secondary.main,
  },
}));

export type ProductBannerProps = {
  product: TShirtListItemInterface;
};

const ImagesSmall = ({ image }: { image: string; }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={1} justify='center'>
      <Grid item>
        <Image
          className={classes.image}
          src={image}
          width='300'
          height='300'
          alt='Camiseta Crow'
        />
      </Grid>
    </Grid>

  );
};

const ProductBanner = ({ product }: ProductBannerProps) => {
  const classes = useStyles();
  const width = useWidth();

  return (
    <Card
      className={classes.card}
      elevation={0}
    >
      <Link underline="none" href="/[type]/[id]" as={`/camisetas/${product?.idUrl}`}>
        <CardActionArea className={classes.cardActionArea}>
          <CardContent>
            <Grid container>
              <Grid item xs={12}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography variant={width === 'xs' ? 'h6' : 'h5'} color='textPrimary'>
                      <b>{product?.title}</b>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.uppercase} variant={width === 'xs' ? 'body2' : 'h6'}>
                      {strings.preSale}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Hidden mdUp>
                  <ImagesSmall image={product?.images && product?.images[0]} />
                </Hidden>
                <Hidden smDown>
                  <Grid container justify='center' spacing={1} alignItems='center'>
                    {
                      (width === 'lg' || width === 'xl') &&
                      product?.images?.map(image => (
                        <Image
                          key={image}
                          className={classes.image}
                          src={image}
                          width='400'
                          height='400'
                          alt='Camiseta Crow'
                        />
                      ))
                    }
                    {
                      width === 'md' &&
                      R.slice(0, 2, product?.images)?.map(image => (
                        <Image
                          key={image}
                          className={classes.image}
                          src={image}
                          width='400'
                          height='400'
                          alt='Camiseta Crow'
                        />
                      ))
                    }
                  </Grid>
                </Hidden>
              </Grid>
              <Grid item xs={12}>
                <Grid container alignItems='center' justify='flex-end'>
                  <Grid item xs={12} sm={6} md={3}>
                    <Grid
                      container
                      justify='center'
                      alignItems='center'
                      className={clsx(classes.uppercase, classes.button)}
                    >
                      <Grid item xs={12}>
                        <Grid container justify='center' alignItems='center' spacing={2}>
                          <Grid item>
                            <Typography color='textSecondary'>{strings.buyNow}</Typography>
                          </Grid>
                          <Grid item>
                            <AiOutlineArrowRight className={classes.arrowIcon} />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default ProductBanner;
