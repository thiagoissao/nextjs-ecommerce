import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Image from 'next/image';
import strings from '../../utils/strings';
import useWidth from '../../hooks/useWidth';

const useStyles = makeStyles(theme => ({
  banner: {
    backgroundColor: theme.palette.primary.main,
    opacity: 0.9,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundImage: 'url(/images/banner2.jpg)'
  },
}));

const WeAre = () => {
  const width = useWidth();
  return (
    <Grid container justify='flex-end' alignItems='center' spacing={1}>
      <Grid item>
        <Typography color='textSecondary' variant='h3' gutterBottom>
          We are
        </Typography>
      </Grid>
      <Grid item>
        <Image
          width={width === 'xs' ? 100 : 200}
          height={width === 'xs' ? 100 : 200}
          alt={strings.appName}
          src='/images/escrita_white.svg'
        />
      </Grid>
      <Grid item>
        <Typography gutterBottom color='textSecondary' variant='h3'>
          !
        </Typography>
      </Grid>
    </Grid>
  );
};

const SecondaryBanner = () => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.banner}>
      <Container maxWidth='lg'>
        <Box py={10}>
          <Grid container>
            <Grid item xs={12}>
              <Box py={2}>
                <Typography color='textSecondary' variant='h2'>
                  Better days are coming....
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12}>
                  <WeAre />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Paper>
  );
};

export default SecondaryBanner;
