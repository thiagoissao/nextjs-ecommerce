import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  primary: {
    width: 200,
    height: 200,
    backgroundColor: theme.palette.primary.main,
  },
  secondary: {
    width: 200,
    height: 200,
    backgroundColor: theme.palette.secondary.main,
  },
  background: {
    backgroundColor: theme.palette.primary.main,
  },
  backgroundSecondary: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Typography>teste aaqureijafa asdfnsafa lnq fsdalnf as fisdoaf ansda</Typography>
      <Typography variant='h1'>Welcome to Crow</Typography>
      <Typography variant='h2'>Welcome</Typography>
      <Typography variant='h3'>Welcome</Typography>
      <Typography variant='h4'>Welcome</Typography>
      <Typography variant='h5'>Welcome</Typography>
      <Typography variant='h6'>Welcome</Typography>
      <Typography variant='body1'>Welcome</Typography>
      <div className={classes.primary} />
      <div className={classes.secondary} />
      <Typography className={classes.background} color='textPrimary' variant='h1'>Text Primary</Typography>
      <Typography className={classes.backgroundSecondary} color='textSecondary' variant='h1'>Text Secondary</Typography>
    </>
  );
}
