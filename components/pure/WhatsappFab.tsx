import React from 'react';
import Fab from '@material-ui/core/Fab';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';
import strings from '../../utils/strings';
import Tooltip from './Tooltip';

const useStyles = makeStyles(theme => ({
  icon: {
    fontSize: theme.spacing(4),
    color: '#41BEA6',
  },
}));

const WhatsappFab = () => {
  const classes = useStyles();
  const theme = useTheme();

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  return (
    <Zoom
      in
      timeout={transitionDuration}
      style={{ transitionDelay: `${transitionDuration.exit}ms` }}
      unmountOnExit
    >
      <Tooltip arrow title='Compre pelo Whatsapp!'>
        <Fab
          href={strings.whatsappLinkMessage}
          target='_blank'
          color="primary"
          aria-label="whatsapp"
        >
          <AiOutlineWhatsApp className={classes.icon} />
        </Fab>
      </Tooltip>
    </Zoom>
  );
};

export default WhatsappFab;
