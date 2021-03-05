import { withStyles } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';

const Button = withStyles(theme => ({
  root: {
    height: theme.spacing(6),
    borderRadius: theme.spacing(3),
    boxShadow: 'none',
    textTransform: 'none',
    '&:hover': {
      boxShadow: 'none',
    },
  },
}))(MuiButton);

Button.defaultProps = {
  fullWidth: true,
  variant: 'contained',
  color: 'primary',
};

export default Button;
