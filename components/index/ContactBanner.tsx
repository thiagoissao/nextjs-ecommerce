import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlineEnvironment,
  AiOutlineInstagram,
} from 'react-icons/ai';
import strings from '../../utils/strings';
import useWidth from '../../hooks/useWidth';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.spacing(3),
  },
  icon: {
    fontSize: theme.spacing(5),
    color: theme.palette.secondary.main,
  },
}));

interface ContactItemProps {
  icon: React.ReactNode,
  title: string,
  value: string;
}

const ContactItem = ({ icon, title, value }: ContactItemProps) => {
  return (
    <Grid container spacing={1} alignItems='center'>
      <Grid item>
        {icon}
      </Grid>
      <Grid item xs>
        <Grid container alignItems='center'>
          <Grid item xs={12}>
            <Typography color='secondary' variant='body1'>
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color='secondary' variant='body2'>
              {value}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const ContactBanner = () => {
  const classes = useStyles();
  const width = useWidth();

  return (
    <Box className={classes.root} p={3}>
      <Grid spacing={2} container>
        <Grid item xs={12} sm={6} md={3}>
          <ContactItem
            icon={<AiOutlineInstagram className={classes.icon} />}
            title={strings.instagram}
            value={strings.instagramContact}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Grid container justify={width === 'xs' || width === 'sm' ? 'flex-start' : 'center'}>
            <Grid item>
              <ContactItem
                icon={<AiOutlineWhatsApp className={classes.icon} />}
                title={strings.whatsApp}
                value={strings.phoneNumberContact}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Grid container justify={width === 'xs' || width === 'sm' ? 'flex-start' : 'center'}>
            <Grid item>
              <ContactItem
                icon={<AiOutlineMail className={classes.icon} />}
                title={strings.email}
                value={strings.emailContact}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Grid container justify={width === 'xs' || width === 'sm' ? 'flex-start' : 'flex-end'}>
            <Grid item>
              <ContactItem
                icon={<AiOutlineEnvironment className={classes.icon} />}
                title={strings.whereWeAre}
                value={`${strings.cityContact} / ${strings.stateContact}`}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactBanner;
