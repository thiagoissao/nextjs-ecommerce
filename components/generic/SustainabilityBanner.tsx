import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Image from 'next/image';

const useStyles = makeStyles(theme => ({
  banner: {
    backgroundColor: theme.palette.primary.main,
  },
  sosBichos: {
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(2),
    borderRadius: theme.spacing(2),
  },
}));

const SustainabilityBanner = () => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.banner}>
      <Container maxWidth='lg'>
        <Box py={10}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography align='center' variant='h4' color='textSecondary'>
                Nós da
                {' '}
                <b>Rakoon Store</b>
                , participamos do movimento
                {' '}
                <b>#ModaPeloBem</b>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography align='center' variant='h6' color='textSecondary'>
                A cada peça que nossa marca constrói, uma doação é feita, isto significa,
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography align='center' variant='h4' color='textSecondary'>
                <b>1 peça =  1 doação</b>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container justify='center' spacing={1} className={classes.sosBichos}>
                <Grid item xs={12}>
                  <Typography align='center' variant='h6' color='textPrimary'>
                    A
                    {' '}
                    <b>Rakoon store</b>
                    {' '}
                    apoia a causa
                    {' '}
                    <b>SOS BICHOS</b>
                  </Typography>
                </Grid>
                <Grid alignItems='center' justify='center' container spacing={3}>
                  <Grid item>
                    <Image
                      src='/images/sos-bichos.png'
                      width={270}
                      height={128}
                      alt='Rakoon Moda Pelo Bem'
                    />
                  </Grid>
                  <Grid item>
                    <Container maxWidth='xs' disableGutters>
                      <Typography align='justify' color='textPrimary'>
                        A ONG SOS Bichos tem como objetivo principal a
                        esterilização ou castração de cães e gatos para evitar a
                        superpopulação de animais de rua e, por consequência,
                        o sofrimento e destino cruel pelos quais eles
                        inevitavelmente passariam.
                      </Typography>
                    </Container>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Paper>
  );
};

export default SustainabilityBanner;
