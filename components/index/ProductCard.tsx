import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import * as R from 'ramda';
import { TShirtListItemInterface } from '../../interfaces/productsInterface';
import Button from '../pure/Button';
import strings from '../../utils/strings';
import format from '../../utils/formatters';
import Tooltip from '../pure/Tooltip';
import WhatsappButton from '../pure/WhatsappButton';
import Link from '../pure/Link';

const useStyles = makeStyles(theme => ({
  card: {
    boxShadow: 'none',
    borderRadius: theme.spacing(3),
    [theme.breakpoints.only('xs')]: {
      height: 'auto',
    },
  },
  cardActionArea: {
    borderRadius: theme.spacing(3),
  },
  image: {
    backgroundColor: theme.palette.secondary.main,
    borderBottomLeftRadius: theme.spacing(3),
    borderBottomRightRadius: theme.spacing(3),
  },
  btnChart: {
    height: theme.spacing(5),
  },
  favorite: {
    color: '#d32f2f',
  },
  title: {
    height: theme.spacing(6),
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'initial',
  },
  discount: {
    textDecoration: 'line-through',
    color: theme.palette.grey[500],
  },
}));

export interface ProductCardProps {
  isFavorite: boolean,
  onClickFavorite: () => void,
  onClickAddToCart: () => void,
  product: TShirtListItemInterface;
  withWhatsappButton?: boolean;
  whatsappHref?: string;
  href: string;
}

const ProductCard = ({
  isFavorite,
  onClickFavorite,
  onClickAddToCart,
  product,
  withWhatsappButton,
  whatsappHref,
  href,
}: ProductCardProps) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Link underline="none" href="/[type]/[id]" as={href}>
        <CardActionArea className={classes.cardActionArea}>
          <CardMedia
            component='img'
            title={`Produto da ${strings.appName}`}
            alt={`Produto da ${strings.appName}`}
            height='300'
            className={classes.image}
            image={!R.isEmpty(product.images) && product.images[0]}
          />
          <CardContent>
            <Grid container>
              <Grid item xs={12}>
                <Typography className={classes.title} variant='body1' color='textPrimary'>
                  {product.title}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                {
                  product.priceWithDiscount && (
                    <Grid container spacing={2} alignItems='center'>
                      <Grid item>
                        <Typography variant='body1' color='textPrimary'>
                          <b>{format.formatNumberToMoneyWithSymbol(product.priceWithDiscount)}</b>
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant='body2' color='textPrimary' className={classes.discount}>
                          {format.formatNumberToMoneyWithSymbol(product.price)}
                        </Typography>
                      </Grid>
                    </Grid>
                  )
                }
                {
                  !product.priceWithDiscount && (
                    <Typography variant='body1' color='textPrimary'>
                      <b>{format.formatNumberToMoneyWithSymbol(product.price)}</b>
                    </Typography>
                  )
                }
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        {!withWhatsappButton && (
          <Grid spacing={1} alignItems='center' container justify='space-between'>
            <Grid item xs>
              <Tooltip arrow title={strings.building}>
                <span>
                  <Button
                    disabled
                    onClick={onClickAddToCart}
                    className={classes.btnChart}
                  >
                    {strings.addToCart}
                  </Button>
                </span>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip arrow title={strings.building}>
                <span>
                  <IconButton
                    disabled
                    onClick={onClickFavorite}
                    aria-label='favorite'
                  >
                    {!isFavorite && <FavoriteBorderRoundedIcon />}
                    {isFavorite && <FavoriteRoundedIcon className={classes.favorite} />}
                  </IconButton>
                </span>
              </Tooltip>
            </Grid>
          </Grid>
        )}
        {
          withWhatsappButton && (
            <Grid container>
              <Grid item xs={12}>
                <WhatsappButton href='' />
              </Grid>
            </Grid>
          )
        }
      </CardActions>
    </Card>
  );
};

ProductCard.defaultProps = {
  withWhatsappButton: false,
  whatsappHref: '/',
};

export default ProductCard;
