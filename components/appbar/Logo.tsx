import React from 'react';
import Grid from '@material-ui/core/Grid';
import Image from 'next/image';
import Hidden from '@material-ui/core/Hidden';
import useWidth from '../../hooks/useWidth';
import Link from '../pure/Link';

const Logo = () => {
  const width = useWidth();

  return (
    <Link underline="none" href="/">
      <Grid container alignItems='center' spacing={1}>
        <Hidden only='xs'>
          <Grid item>
            <Image
              width={width === 'xs' ? '35' : '45'}
              height={width === 'xs' ? '45' : '55'}
              src='/images/logo.svg'
              alt='Crow ECommerce'
            />
          </Grid>
        </Hidden>
        <Grid item xs>
          <Image
            width={width === 'xs' ? '45' : '55'}
            height={width === 'xs' ? '45' : '55'}
            src='/images/escrita.svg'
            alt='Crow ECommerce'
          />
        </Grid>
      </Grid>
    </Link>
  );
};

export default Logo;
