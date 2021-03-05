import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import strings from '../../utils/strings';

const useStyles = makeStyles(() => ({
  name: {
    fontSize: 35,
  },
}));

const Blog = () => {
  const classes = useStyles();
  return (
    <Grid container justify='center'>
      <Grid item>
        <Image
          width='300'
          height='300'
          src='/images/building.svg'
          alt={`${strings.appName} Blog`}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography align='center' variant='h5'>
          Esta página ainda está sendo construída!
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='body2'>
          Atenciosamente, equipe 
          {' '}
          <span className={classes.name}>{strings.appName}</span>
          !
        </Typography>
      </Grid>
    </Grid>

  );
};

export default Blog;
