import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Image from 'next/image';
import strings from '../../utils/strings';

const Blog = () => {
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
          We are building this page..
        </Typography>
      </Grid>
    </Grid>

  );
};

export default Blog;
