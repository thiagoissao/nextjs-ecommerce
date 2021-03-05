import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Image from 'next/image';
import strings from '../../utils/strings';

const useStyles = makeStyles(theme => ({
  banner: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const Rakoon = () => (
  <Grid container justify='flex-end' alignItems='center'>
    <Grid item>
      <Typography color='textSecondary' variant='h3'>
        Somos a
      </Typography>
    </Grid>
    <Grid item>
      <Image
        width={200}
        height={200}
        alt={strings.appName}
        src='/images/escrita_white.svg'
      />
    </Grid>
    <Grid item>
      <Typography color='textSecondary' variant='h3'>
        !
      </Typography>
    </Grid>
  </Grid>
);

const Banner = () => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.banner}>
      <Container maxWidth='lg'>
        <Box py={10}>
          <Grid container>
            <Grid item xs={12}>
              <Box py={2}>
                <Typography color='textSecondary' variant='h2'>
                  Seja bem-vindo a nossa loja,
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12}>
                  <Rakoon />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography color='textSecondary' variant='h5'>
                Por enquanto, estamos atendendo apenas pelo Whatsapp, nos envie uma mensagem :)
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Paper>
  );
};

export default Banner;
