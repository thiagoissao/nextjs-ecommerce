import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Image from 'next/image';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineWhatsApp,
} from 'react-icons/ai';
import strings from '../../utils/strings';
import Tooltip from '../pure/Tooltip';
import useWidth from '../../hooks/useWidth';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.secondary.main,
  },
  appname: {
    fontFamily: 'IndieFlower',
  },
  iconButton: {
    color: theme.palette.primary.main,
    fontSize: 35,
    [theme.breakpoints.only('xs')]: {
      fontSize: 30,
    },
    '&:hover': {
      backgroundColor: 'white',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  const width = useWidth();
  return (
    <Grid
      className={classes.root}
      justify='center'
      container
    >
      <Grid item xs={12}>
        <Container maxWidth='lg'>
          <Box my={5}>
            <Grid container>
              <Grid item xs={12}>
                <Grid
                  container
                  justify={width === 'xs' ? 'flex-start' : 'space-between'}
                  spacing={2}
                  alignItems='center'>
                  <Grid item>
                    <Typography variant='h5' color='textPrimary'>
                      Follow us on social media
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Grid container spacing={1}>
                      <Grid item>
                        <Tooltip arrow title='Twitter'>
                          <IconButton
                            // target='_blank'
                            href='/'
                            className={classes.iconButton}
                          >
                            <AiOutlineTwitter />
                          </IconButton>
                        </Tooltip>
                      </Grid>
                      <Grid item>
                        <Tooltip arrow title='Instagram'>
                          <IconButton
                            // target='_blank'
                            href='/'
                            className={classes.iconButton}
                          >
                            <AiOutlineInstagram />
                          </IconButton>
                        </Tooltip>
                      </Grid>
                      <Grid item>
                        <Tooltip title='Facebook' arrow>
                          <IconButton
                            // target='_blank'
                            href='/'
                            className={classes.iconButton}
                          >
                            <AiOutlineFacebook />
                          </IconButton>
                        </Tooltip>
                      </Grid>
                      <Grid item>
                        <Tooltip arrow title='Whatsapp'>
                          <IconButton
                            target='_blank'
                            href={strings.whatsappLinkMessage}
                            className={classes.iconButton}
                          >
                            <AiOutlineWhatsApp />
                          </IconButton>
                        </Tooltip>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Box my={5}>
                  <Divider />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={12}>
                    <Grid spacing={1} alignItems='center' container>
                      <Grid item>
                        <Image
                          width={80}
                          height={80}
                          alt={strings.appName}
                          src='/images/logo.svg'
                        />
                      </Grid>
                      <Grid item>
                        <Image
                          width={80}
                          height={80}
                          alt={strings.appName}
                          src='/images/escrita.svg'
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant='body2' color='textPrimary'>
                      {strings.copyright}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Footer;
