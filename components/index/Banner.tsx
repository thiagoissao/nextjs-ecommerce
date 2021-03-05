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
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles(theme => ({
  banner: {
    backgroundColor: theme.palette.primary.main,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundImage: 'url(/images/banner.jpg)'
  },
}));

const WeAre = () => {
  const width = useWidth();
  return (
    <Grid container justify='flex-end' alignItems='center' spacing={1}>
      <Grid item>
        <Fade right>
          <Typography color='textSecondary' variant='h3' gutterBottom>
            We are
        </Typography>
        </Fade>
      </Grid>
      <Grid item>
        <Fade right>
          <Image
            width={width === 'xs' ? 100 : 200}
            height={width === 'xs' ? 100 : 200}
            alt={strings.appName}
            src='/images/escrita_white.svg'
          />
        </Fade>
      </Grid>
      <Grid item>
        <Fade right>
          <Typography gutterBottom color='textSecondary' variant='h3'>
            !
        </Typography>
        </Fade>
      </Grid>
    </Grid>
  );
};

const Banner = () => {
  const classes = useStyles();
  const width = useWidth();

  return (
    <Paper elevation={0} className={classes.banner}>
      <Container maxWidth='lg'>
        <Box py={10}>
          <Grid container>
            <Grid item xs={12}>
              <Box py={2}>
                <Fade left>
                  <Typography color='textSecondary' variant={width === 'xs' ? 'h4' : 'h2'}>
                    Welcome to Next E-commerce
                </Typography>
                </Fade>
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

export default Banner;
