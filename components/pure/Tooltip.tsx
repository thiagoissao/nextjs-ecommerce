import { withStyles, Theme } from '@material-ui/core/styles';
import MuiTooltip from '@material-ui/core/Tooltip';

const Tooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 14,
    borderRadius: theme.spacing(3),
  },
  arrow: {
    color: theme.palette.primary.main,
  },
}))(MuiTooltip);

export default Tooltip;
